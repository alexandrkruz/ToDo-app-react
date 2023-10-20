import React, { useState } from 'react';
import { Button } from '../Button/index';

function RenameTaskButton({ task, onRenameTask }) {
  const [newName, setNewName] = useState(task.name);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSaveClick = () => {
    onRenameTask(newName, task.id);
  };

  return (
    <div>
      <input type="text" value={newName} onChange={handleNameChange} />
      <Button onClick={handleSaveClick}>Save</Button>
    </div>
  );
}

export default RenameTaskButton;
