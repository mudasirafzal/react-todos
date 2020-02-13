import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <span
            className="fa fa-times done"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {" "}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
