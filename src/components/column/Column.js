import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import "./Column.css";

const Column = (props, { removeCard }) => {
  return (
    <div className="column">
      <div>
        {props.todos.map((todo, index) => {
          return (
            <Card
              todo={todo}
              key={todo.id}
              index={index}
              removeCard={removeCard}
            />
          );
        })}
      </div>
    </div>
  );
};

Column.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Column;
