import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home'
import CreateTask from './components/CreateTask/CreateTask'
import TaskListView from './components/TaskListView/TaskListView'

import './App.css';

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
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/create" className="nav_link">Create Task</Link>
            <Link to="/view" className="nav_link">View tasks</Link>
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
                <TaskListView tasks={tasks}
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
