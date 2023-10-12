import React from 'react';
import Button from '../Button/index';

function FilterTask({ onFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Фильтр задач"
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default FilterTask;

