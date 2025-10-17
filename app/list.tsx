import CardBox from "@/components/CardBox";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const List = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  // Busca só quando botão é pressionado
  const getUser = async () => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}`
        );
        setUsuarios(response.data.items);
      } catch (error) {
        console.error(error);
      }
    } else {
      setUsuarios([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar Usuário Github</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputText}>
          <TextInput
            placeholder="Buscar usuário Github"
            value={query}
            onChangeText={setQuery}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={getUser}>
            <Image
              source={require("@/assets/images/search.png")}
              style={styles.inputImage}
            />
          </TouchableOpacity>
        </View>
        <FlatList
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
  header: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  body: {
    flex: 11,
    padding: 16,
    backgroundColor: "#FFF",
    gap: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    color: "#FFF",
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
