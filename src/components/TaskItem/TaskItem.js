import React, { useState } from 'react';
import { Button } from '../Button/index';

import RenameTaskButton from '../RenameTaskButton/RenameTaskButton';

import ImageProgress from '../../assets/icons/double.svg';
import ImageCompleted from '../../assets/icons/cancel.svg';
import ImagePending from '../../assets/icons/favourite.svg';

const statusImg = {
  progress: ImageProgress,
  completed: ImageCompleted,
  pending: ImagePending,
};

function TaskItem({ task, onStatusChange, onDeleteTask, onTaskChange }) {
  const [renaming, setRenaming] = useState(false);

  const startRename = () => {
    setRenaming(true);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task);
  };

  const changeStatus = (status) => {
    onStatusChange(task, status);
  };

  const handleRenameTask = (newName, id) => {
    onTaskChange(newName, id);
    setRenaming(false);
  };

  return (
    <li>
      <img src={statusImg[task.status]} alt={task.status} width={15} /> - {task.name}
      {renaming ? (
        <RenameTaskButton task={task} onRenameTask={handleRenameTask} />
      ) : (
        <>
        {task.status === 'progress' ? (<Button
            status="completed"
            onClick={() => changeStatus('completed')}
            className='task-btn-complete'
          >
            Завершеить
          </Button>) : (<Button
            status="progress"
            onClick={() => changeStatus('progress')}
            className='task-btn-progres'
          >
            В процессе
          </Button>)}
          
          <Button status="rename" onClick={startRename} className='task-btn-rename'>
            Изменить 
          </Button>

          <Button status="rename" onClick={handleDeleteTask} className='task-btn-delete'>
            Delete 
          </Button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
