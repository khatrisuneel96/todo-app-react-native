import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./app/screens/Header";
import TodoItem from "./app/screens/TodoItem";
import AddTodo from "./app/screens/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Todo1", key: "1" },
    { text: "Todo2", key: "2" },
    { text: "Todo3", key: "3" },
  ]);

  const handlerPress = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key));
  };

  const submitHandler = (text) => {
    setTodos(
      (prevTodos) => (
        { text: text, key: Math.random().toString() }, [...prevTodos]
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlerPress={handlerPress} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
