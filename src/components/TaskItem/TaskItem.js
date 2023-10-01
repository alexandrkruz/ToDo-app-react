import React from 'react';
import StatusChangeButton from './StatusChangeButton';

function TaskItem({ task, onStatusChange }) {
  return (
    <li>
      {task.name} - {task.status}
      <StatusChangeButton status="в процессе" onClick={() => onStatusChange(task, 'в процессе')} />
      <StatusChangeButton status="завершено" onClick={() => onStatusChange(task, 'завершено')} />
    </li>
  );
}

export default TaskItem;