import React from 'react';

export const Button = ({ onClick, status, className, children }) => {

  return <button onClick={() => onClick(status ? status : '')} className={className} >{children}</button>;
}

export const ButtonSave = ({ onClick, status, className, children }) => {

  return <button onClick={() => onClick(status ? status : '')} className={className} >{children}</button>;
}
