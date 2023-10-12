import React from 'react';
import Button from '../Button/index';

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
