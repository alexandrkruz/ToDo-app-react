import React, { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreate = (taskName) => {
    const newTask = { name: taskName, status: 'запланировано' };
    setTasks([...tasks, newTask]);
  };

  const handleStatusChange = (task, newStatus) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, status: newStatus } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Управление задачами</h1>
      <TaskForm onTaskCreate={handleTaskCreate} />
    </div>
  );
}

export default App;







