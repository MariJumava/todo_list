import React, { useState } from 'react';
import './AddCard.css';

export const AddCard = ({ addCard }) => {
  const [value, setValue] = useState('');

  const saveCard = () => {
        let card = {
            title: value
    };
    addCard(card);
  }
  const submitHandler = (event) => {
    event.preventDefault(); 
  };

  return (
    <form className='addCard' onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={saveCard}>Add Card</button>
    </form>
  );
};

