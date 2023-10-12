import React, { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList';
import SearchTask from './components/SearchTask/SearchTask';
import { FilterTasks } from './components/FilterTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');

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

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  const filteredTasks = tasks
    .filter((task) => task.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((task) => task.name.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div className="App">
      <h1>Управление задачами</h1>
      <TaskForm onTaskCreate={handleTaskCreate} />
      <SearchTask onSearchChange={handleSearchChange} />
      <FilterTasks onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;







