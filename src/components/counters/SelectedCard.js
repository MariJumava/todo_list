import React, { useState } from 'react';

export const SelectedCard = ({ setState }) => {
  const [value, setValue] = useState('');

  return (
    <select         
        className="card-btn"
        value={value} 
        onChange={(event) => {
        setValue(event.target.value)
        setState(event.target.value)
        }}
    >
      <option>All</option>
      <option >Completed</option>

    </select>
  )
}