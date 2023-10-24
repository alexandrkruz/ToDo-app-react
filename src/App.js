import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList';
import SearchTask from './components/SearchTask/SearchTask';

import './App.css';

const Home = () => {
  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать! Вы можете создать новую задачу или просмотреть существующие.</p>
    </div>
  );
};

const CreateTask = ({ handleTaskCreate }) => {
  return (
    <div className="options">
      <h2 className="options_title">Управление задачами</h2>
      <TaskForm onTaskCreate={handleTaskCreate} />
    </div>
  );
};

const TaskListView = ({ tasks, handleStatusChange, handleDeleteTask, updateTasks, searchText, handleSearchChange }) => {
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="task_list">
      <h2 className="list_title">Список Задач</h2>
      <SearchTask onSearchChange={handleSearchChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDeleteTask={handleDeleteTask}
        updateTasks={updateTasks}
      />
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');

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

  return (
    <Router>
      <div className="App">
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Task</Link>
            <Link to="/view">View tasks</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create"
              element={<CreateTask handleTaskCreate={handleTaskCreate} />}
            />
            <Route
              path="/view"
              element={
                <TaskListView
                  tasks={tasks}
                  handleStatusChange={handleStatusChange}
                  handleDeleteTask={handleDeleteTask}
                  updateTasks={setTasks}
                  searchText={searchText}
                  handleSearchChange={handleSearchChange}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
