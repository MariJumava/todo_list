import React, { useState } from "react";
import { uniqueId } from "lodash";
import "./AddCard.css";

export const AddCard = ({ addCard, closeCardModal }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const saveCard = () => {
    const card = {
      id: uniqueId(),
      title: value,
      description: description,
      completed: false,
    };
    addCard(card);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setValue("");
  };

  return (
    <div className="create-card-wrap">
      <div className="create-card-description-wrap">
        <form className="addCard" onSubmit={submitHandler}>
          <input
            className="create-card-input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="close-card-modal-btn" onClick={closeCardModal}>
            &times;
          </button>
          <h4 className="create-card-title-description">Description:</h4>
          <textarea
            className="create-card-description"
            description={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button className="create-card-save-btn" onClick={saveCard}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
