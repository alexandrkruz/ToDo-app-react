import React, { useState } from 'react';

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
      <button onClick={handleTaskCreate}>Создать задачу</button>
    </div>
  );
}

export default TaskForm;
