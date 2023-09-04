import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          // using the obj. which was created in form component to map its value with unique keys for each todo.
          todos.map((todo) => (
            <Todo
              todos={todos}
              todo={todo}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
