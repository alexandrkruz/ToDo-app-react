import React from "react";
import SearchTask from "../SearchTask/SearchTask";
import TaskList from "../TaskList";

const TaskListView = ({ tasks, handleStatusChange, handleDeleteTask, updateTasks, searchText, handleSearchChange }) => {
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
      <div className="task_list">
        <h2 className="list_title">Список Задач</h2>
        <SearchTask onSearchChange={handleSearchChange} />
        <TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDeleteTask={handleDeleteTask} updateTasks={updateTasks}/>
      </div>
    );
  };
  
  export default TaskListView;