import React from "react";
import TaskForm from '../TaskForm/TaskForm';

const CreateTask = ({ handleTaskCreate }) => {
    return (
      <div className="options">
        <h2 className="options_title">Управление задачами</h2>
        <TaskForm onTaskCreate={handleTaskCreate} />
      </div>
    );
  };

export default CreateTask;