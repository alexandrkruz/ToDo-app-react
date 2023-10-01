import React from 'react';
import TaskItem from '';

function TaskList({ tasks, onStatusChange }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onStatusChange={onStatusChange} />
      ))}
    </ul>
  );
}

export default TaskList;