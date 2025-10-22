import { User } from "@/types/userTypes";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const login = params.login || "Usuário";

  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => {
        setUserData(null);
      });
  }, [login]);

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Usuário não encontrado ou erro ao carregar dados
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={28}
          color="#fff"
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={styles.title}>Buscar Usuário Github</Text>
      </View>
      <View style={styles.container}>
        {userData?.avatar_url && (
          <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
        )}
        <Text style={styles.texto}>
          {userData ? userData.login : "Usuário"}
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.itemBox}>
            <Text style={styles.itemNumber}>{userData.public_repos}</Text>
            <Text style={styles.subtexto}>Repositórios</Text>
          </View>
          <View style={styles.itemBox}>
            <Text style={styles.itemNumber}>{userData.followers}</Text>
            <Text style={styles.subtexto}>Seguidores</Text>
          </View>
          <View style={styles.itemBox}>
            <Text style={styles.itemNumber}>{userData.following}</Text>
            <Text style={styles.subtexto}>Seguindo</Text>
          </View>
        </View>
        <View style={styles.statsColumn}>
          <Text style={styles.subtexto}>
            Localização: {userData.location || "Não informada"}
          </Text>
          <Text style={styles.subtexto}>
            Empresa: {userData.company || "Não informada"}
          </Text>
          <Text style={styles.subtexto}>
            Blog: {userData.blog || "Não informada"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#2c083dff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  backIcon: {
    marginRight: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    color: "#FFF",
    flex: 1,
    textAlign: "center",
    marginRight: 40,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#ddd",
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
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  itemBox: {
    alignItems: "center",
    flex: 1,
  },
  itemNumber: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2c083dff",
    marginBottom: 4,
  },
  statsColumn: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 16,
    alignItems: "center",
    gap: 8,
  },
});

export default Account;
