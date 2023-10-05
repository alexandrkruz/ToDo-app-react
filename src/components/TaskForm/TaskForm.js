import React, { useState } from 'react';
import { Button } from '../Button';

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
      <Button onClick={handleTaskCreate} className='form-btn' >Создать задачу</Button>
    </div>
  );
}

export default TaskForm;
