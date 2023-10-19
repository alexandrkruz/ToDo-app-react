import React from 'react';
import { Button } from '../Button/index';

function DeleteTaskButton({ onClick, className }) {
  return (
    <Button status="delete" onClick={onClick} className={className}>
      Удалить
    </Button>
  );
}

export default DeleteTaskButton;