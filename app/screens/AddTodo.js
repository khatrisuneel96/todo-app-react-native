import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  RefreshControl,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const doClear = () => {
    setText("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="New Todo.."
        onChangeText={changeHandler}
      />

      <Button
        title="Add"
        color="coral"
        onPress={() => {
          submitHandler(text), doClear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
});
