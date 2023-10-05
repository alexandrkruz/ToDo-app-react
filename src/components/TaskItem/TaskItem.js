import React, { useEffect } from 'react';
import { Button, ButtonSave } from '../Button';

import ImageProgress from '../../assets/icons/double.svg';
import ImageCompleted from '../../assets/icons/cancel.svg';
import ImagePending from '../../assets/icons/favourite.svg';

function TaskItem({ task, onStatusChange }) {

  useEffect(() => {
    console.log('1231212')

    return () => {
      console.log('333333')
    };
  });

  const changeStatus = (status) => {
    onStatusChange(task, status)
  }

  const statusImg = {
    progress: ImageProgress,
    completed: ImageCompleted,
    pending: ImagePending,
  }

  return (
    <li >
      <img src={statusImg[task.status]} alt={task.status} width={15} /> - {task.name}
      <Button status="progress" onClick={changeStatus} className='task-btn-progres' >В процессе</Button>
      <ButtonSave status="completed" onClick={changeStatus} className='task-btn-complete' >завершено</ButtonSave>
    </li>
  );
}

export default TaskItem;