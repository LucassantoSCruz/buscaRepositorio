import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Buscar Repositório Github</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    color: "#ffffff",
  },
  backIcon: {
    marginRight: 16,
  },
});
