import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";


function App() {
  // states to handle the input values and each todos
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
