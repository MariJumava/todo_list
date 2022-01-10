import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddCard.css";

const AddCard = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const sabmitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
    }
  };
  return (
    <form className="addCard" onSabmit={sabmitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>Add Card</button>
    </form>
  );
};

// eslint-disable-next-line react/no-typos
AddCard.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddCard;
