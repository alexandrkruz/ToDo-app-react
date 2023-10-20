import React from 'react';

function SearchTask({ onSearchChange }) {
  return (
    <input
      className="task_name search"
      type="text"
      placeholder="Поиск задачи"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchTask;
