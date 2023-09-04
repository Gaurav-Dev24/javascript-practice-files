import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>Dev's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
