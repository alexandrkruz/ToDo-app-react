import React, { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList';
import SearchTask from './components/SearchTask/SearchTask';
import RenameTaskButton from './components/RenameTaskButton/RenameTaskButton';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');

  const handleTaskCreate = (taskName) => {
    const newTask = { name: taskName, status: 'progress' };
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

  const handleRenameTask = (task, newName) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, name: newName } : t
    );
    setTasks(updatedTasks);
  };

  const renderTaskActions = (task) => (
    <RenameTaskButton key={task.id} task={task} onRenameTask={handleRenameTask} />
  );

  const filteredTasks = tasks
    .filter((task) => task.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((task) => task.name.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div className="App">
      <div className="container">
        <div className="options">
          <h2 className="options_title">Управление задачами</h2>
          <TaskForm onTaskCreate={handleTaskCreate} />
          <SearchTask onSearchChange={handleSearchChange} />
        </div>
        <div className="task_list">
        <h2 className="list_title">Список</h2>
          <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDeleteTask={handleDeleteTask}
            renderActions={renderTaskActions}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

