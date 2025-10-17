import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2c083dff",
    padding: 8,
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFF",
  },
});
