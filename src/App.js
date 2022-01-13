import { useState, useMemo } from 'react';
import { Column } from './components/column/Column.js';
import { AddCard } from './components/addCard/AddCard.js';
import { CreateCard } from './components/createCard/CreateCard.js';
import { CompletedTodos } from './components/counters/CompletedTodos';
import { AllTodos } from './components/counters/AllTodos.js';

export const App = () => {
  const [cards, setCards] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const clickOnShowCardButton = () => {
    setShowButton(false);
  };

  const removeCard = (id) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  const addCard = (card) => {
    setCards((cards) => [...cards, card]);
    setShowButton(true);
  };

  const closeCardModal = () => {
    setShowButton(true);
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

  const completedCardsLength = useMemo(
    () => cards.filter((card) => card.completed)?.length,
    [cards]
  );

  return (
    <div className="wrapp">
      <h1 className="title">ToDo List</h1>
      <div className="header-list">
        {showButton ? (
          <CreateCard onClick={clickOnShowCardButton} />
        ) : (
          <AddCard addCard={addCard} closeCardModal={closeCardModal} />
        )}
        <AllTodos cardCount={cards ? cards.length : 0} />
        <CompletedTodos completedCardsLength={completedCardsLength} />
      </div>
      {cards && cards.length ? (
        <Column cards={cards} removeCard={removeCard} onToggle={toggleCard} />
      ) : (
        <p className="text-warning">No ToDo &#128060;</p>
      )}
    </div>
  );
};
