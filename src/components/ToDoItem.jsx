import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;
