import { Column } from "./components/column/Column.js";
import { AddCard } from "./components/addCard/AddCard.js";
import { useState } from "react";

export const App = () => {
  const [cards, setCards] = useState([]);

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const addCard = (card) => {
    setCards((cards) => [...cards, card]);
  };

  const toggleCard = (id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          card.completed = !card.completed;
        }
        return card;
      })
    );
  };

  return (
    <div className="wrapp">
      <h1 className="title">ToDo List</h1>
      <AddCard addCard={addCard} />
      {Boolean(cards.length) && cards ? (
        <Column cards={cards} removeCard={removeCard} onToggle={toggleCard} />
      ) : (
        <p>No ToDo</p>
      )}
    </div>
  );
};
