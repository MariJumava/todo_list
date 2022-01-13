import React from 'react';
import './CreateCard.css';

export const CreateCard = ({ onClick }) => {
  return (
    <div className="create-card" onClick={onClick}>
      Add Card +
    </div>
  );
};
