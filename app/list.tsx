import CardBox from "@/components/CardBox";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { useUsers } from "@/context/UsersContext";
import { useGithubUsers } from "@/hooks/useGithubUsers";
import { Users } from "@/types/userTypes";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const List = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { usuarios, loading } = useUsers();
  const { getUser } = useGithubUsers();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <SearchBar
          query={query}
          setQuery={setQuery}
          getUser={() => getUser(query)}
        />
        <FlatList<Users>
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardBox
              name={item.login}
              image={item.avatar_url}
              type={item.type}
              onPress={() => router.push(`/${item.login}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c083dff",
  },
  body: {
    flex: 11,
    padding: 16,
    backgroundColor: "#FFF",
    gap: 16,
  },
  inputText: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  inputImage: {
    width: 24,
    height: 24,
  },
});

export default List;
