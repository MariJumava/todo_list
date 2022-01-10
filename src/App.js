import React from "react";
import Column from "./components/column/Column.js";
import Card from "./components/card/Card";
import AddCard from "./components/addCard/AddCard.js";
import { useState } from "react";

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const todos = [
    { id: 1, completed: false, title: "ToDo" },
    { id: 2, completed: false, title: "InProgress" },
    { id: 3, completed: false, title: "Done" },
  ];

  const removeCard = () => {
    setShowCard(true);
  };

  const addCard = (title) => {
    setShowCard(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    );
  };

  return (
    <div className="wrapp">
      <h1 className="title">ToDo List</h1>
      <AddCard onCreate={addCard} />
      {todos.length ? (
        <Column todos={todos} removeCard={removeCard} />
      ) : (
        <p>No ToDo</p>
      )}
      {showCard ? <Card /> : null}
    </div>
  );
};

export default App;
