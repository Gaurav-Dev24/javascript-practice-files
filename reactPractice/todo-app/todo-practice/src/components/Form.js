import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
// handler function to grab values from input field
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

// handler function to submit the todos 
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      // here we are creating each todo as an obj.  
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    
    // after creating todo obj. I reset the state as empty
    setInputText("");
  };

  // handler function for filtering the todos
  const statusHandler = (e)=>{
    setStatus(e.target.value);
  }



  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
