import React, { useState } from 'react';
import { Button, ButtonSave } from '../Button/index';
import RenameTaskButton from '../RenameTaskButton/RenameTaskButton';

import ImageProgress from '../../assets/icons/double.svg';
import ImageCompleted from '../../assets/icons/cancel.svg';
import ImagePending from '../../assets/icons/favourite.svg';

const statusImg = {
  progress: ImageProgress,
  completed: ImageCompleted,
  pending: ImagePending,
};

function TaskItem({ task, onStatusChange, onDeleteTask, renderActions }) {
  const [renaming, setRenaming] = useState(false);

  const startRename = () => {
    setRenaming(true);
  };

  const changeStatus = (status) => {
    onStatusChange(task, status);
  };

  return (
    <li>
      <img src={statusImg[task.status]} alt={task.status} width={15} /> - {task.name}
      {renaming ? (
        <div>
          {renderActions(task)}
        </div>
      ) : (
        <>
          <Button
            status="progress"
            onClick={() => changeStatus('progress')}
            className='task-btn-progres'
          >
            В процессе
          </Button>
          <ButtonSave
            status="completed"
            onClick={() => changeStatus('completed')}
            className='task-btn-complete'
          >
            завершено
          </ButtonSave>
          <Button status="rename" onClick={startRename} className='task-btn-rename'>
            Rename
          </Button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
