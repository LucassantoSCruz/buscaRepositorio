import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardBox({ name, image, type, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: `${image}` }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textType}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 999,
  },
  textContainer: {
    gap: 4,
  },
  textName: {
    color: "#000000ff",
    fontSize: 16,
    fontWeight: "600",
  },
  textType: {
    color: "#777777ff",
    fontSize: 12,
  },
});
