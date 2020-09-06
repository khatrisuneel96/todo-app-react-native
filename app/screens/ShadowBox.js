import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ShadowBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    paddingTop: 20,
  },
  boxOne: {
    flex: 1,
    backgroundColor: "pink",
    textAlign: "center",
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "green",
  },
  boxThree: {
    flex: 1,
    backgroundColor: "yellow",
  },
  boxFour: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
