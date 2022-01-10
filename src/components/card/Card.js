import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ todo, index, id, removeCard }) => {
  return (
    <div className="card">
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.title}
      <button onClick={() => removeCard(todo.id)}>&times;</button>
    </div>
  );
};

Card.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Card;
