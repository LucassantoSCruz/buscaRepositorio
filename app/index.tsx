import Button from "@/components/Button";
import Header from "@/components/Header";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Image
          source={require("../assets/images/github.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Explore o GitHub. Encontre repositórios e usuários.
        </Text>
        <Button
          title={"Entrar"}
          onPress={() => {
            router.push("/list");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c083dff",
  },
  body: {
    flex: 11,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 32,
    backgroundColor: "#FFF",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000000ff",
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
});
