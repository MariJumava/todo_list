import React from 'react';
import './CreateCard.css';

export const CreateCard = ({ onClick }) => {
  return (
    <div className="card-btn" onClick={onClick}>
      Add Card +
    </div>
  );
};
