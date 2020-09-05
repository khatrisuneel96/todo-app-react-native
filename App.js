import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./app/screens/Header";
import TodoItem from "./app/screens/TodoItem";
import AddTodo from "./app/screens/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handlerPress = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key));
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => [
      { text: text, key: Math.random().toString() },
      ...prevTodos,
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          {todos.length === 0 && (
            <Text style={styles.empty}>Nothing To Do!</Text>
          )}
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
  empty: {
    padding: 16,
    marginTop: 16,
    fontStyle: "italic",
    fontSize: 20,
    color: "#bbb",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    borderStyle: "dashed",
  },
});
