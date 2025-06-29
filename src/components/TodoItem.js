import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? 'list-group-item-success' : ''
      }`}
    >
      <span
        onClick={onToggle}
        style={{
          cursor: 'pointer',
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button className="btn btn-sm btn-danger" onClick={onDelete}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
