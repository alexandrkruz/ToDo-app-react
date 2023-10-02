import React from 'react';

function StatusChangeButton({ onClick, status }) {
  return <button onClick={onClick}>{status}</button>;
}

export default StatusChangeButton;
