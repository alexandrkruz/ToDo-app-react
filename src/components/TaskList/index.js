import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onStatusChange, onDeleteTask, renderActions }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDeleteTask={onDeleteTask}
          renderActions={renderActions} // Передаем renderActions в TaskItem
        />
      ))}
    </div>
  );
};

export default TaskList;
