import React, { useState } from 'react';
import CreateTaskButton from './CreateTaskButton/CreateTaskButton';

function TaskForm({ onTaskCreate }) {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskCreate = () => {
    if (taskName) {
      onTaskCreate(taskName);
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите название задачи"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <CreateTaskButton onClick={handleTaskCreate} />
    </div>
  );
}

export default TaskForm;
