import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, handlerPress }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => handlerPress(item.key)}
      >
        <AntDesign name="delete" size={20} color="#333" />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    textAlign: "center",
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
  },
});
