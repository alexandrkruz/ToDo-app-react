import React from 'react';

function SearchTask({ onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Поиск задачи"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchTask;
