import React, { useState } from 'react';
import { ButtonSave } from '../Button/index';

function RenameTaskButton({ task, onRenameTask }) {
  const [newName, setNewName] = useState(task.name);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSaveClick = () => {
    onRenameTask(task, newName);
  };

  return (
    <div>
      <input type="text" value={newName} onChange={handleNameChange} />
      <ButtonSave onClick={handleSaveClick}>Save</ButtonSave>
    </div>
  );
}

export default RenameTaskButton;
