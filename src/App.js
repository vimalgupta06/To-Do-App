import React, { useState } from 'react';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = { text: task, completed: false };
    setTodos([...todos, newTask]);
    setTask('');
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 React To-Do App</h2>
      <InputBar task={task} setTask={setTask} addTask={addTask} />
      <ul className="list-group">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => toggleComplete(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
