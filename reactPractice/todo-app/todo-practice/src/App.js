import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";


function App() {
  // states to handle the input values and each todos
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // state to handle filtering of todos
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  //  We want to run this handler only once
  useEffect(() => {
    getLocalTodos();
  },[])

  // using useffect hook to filter the todo when the value of state like todos & status changes
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status])

  // handler function to filter the todos
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //handler function to Save the todos to localStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  //handler function to Get the todos which are already saved
  const getLocalTodos =() => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }

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
        setStatus={setStatus}
      />
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
