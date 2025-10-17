import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Account = () => {
  const params = useLocalSearchParams(); // Por exemplo, se você passa ?name=Lucas na URL, acessa assim:

  const login = params.login || "Usuário";

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Bem-vindo ao seu App React Native, {login}
      </Text>
      <Text style={styles.subtexto}>Tela provisória gerada.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtexto: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
});

export default Account;
