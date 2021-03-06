import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import './AddCard.css';

export const AddCard = ({ addCard, closeCardModal }) => {
  const [value, setValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const card = {
      id: uniqueId(),
      title: value,
      completed: false,
    };
    addCard(card);
    setValue(''); 
  };

  return (
    <div className="create-card-wrap">
      <div className="title-with-btn">
        <h4 className="card-title">Enter ToDo:</h4>
        <button className="close-card-modal-btn" onClick={closeCardModal}>
          &times;
        </button>
      </div>
      <form className="addCard" onSubmit={submitHandler}>
        <input
          className="create-card-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="create-card-save-btn">
          Save
        </button>
      </form>
    </div>
  );
};
