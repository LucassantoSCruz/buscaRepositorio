import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchBar({ query, setQuery, getUser }) {
  return (
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
  );
}

const styles = StyleSheet.create({
  inputText: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  inputImage: {
    width: 24,
    height: 24,
  },
});
