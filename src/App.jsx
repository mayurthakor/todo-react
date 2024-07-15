import "./App.css";
import React from "react";

import TodoItemsContextProvider from "./store/ToDoItemsContext";

import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <WelcomeMessage />
        <ToDoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
