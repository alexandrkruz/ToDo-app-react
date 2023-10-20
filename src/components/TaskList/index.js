import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onStatusChange, onDeleteTask, updateTasks }) => {

  const onTaskChange = (newName, id) => {

    const updatedTasks = tasks.map(task => {
        if(id === task.id) {
          return {
            ...task,
            name: newName
          }
        }
        return task;
    })

    updateTasks(updatedTasks);
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDeleteTask={onDeleteTask}
          onTaskChange={onTaskChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
