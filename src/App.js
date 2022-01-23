import { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column } from './components/column/Column.js';
import { AddCard } from './components/addCard/AddCard.js';
import { CreateCard } from './components/createCard/CreateCard.js';
import { CompletedTodos } from './components/counters/AllTodos.js';
import { AllTodos } from './components/counters/AllTodos.js';
import { toggleCard, setCardsAsync, addCardAsyncCall, removeCard } from './redux/thunk.js';

export const App = () => {
  const [showButton, setShowButton] = useState(true);
  const cards = useSelector((state) => state.cards);
  const error = useSelector((state) => state.error);
  
const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setCardsAsync());
  }, [dispatch]);
   

  const addCard = async (card) => {
    await dispatch(addCardAsyncCall(card));
    setShowButton(true);
  };

  const deleteCard = async (id) => {
    dispatch(removeCard(id));
  };

  const selectedCard = async (card) => {
    card.completed = !card.completed;
    dispatch(toggleCard(card));
  };

  const closeCardModal = () => {
    setShowButton(true);
  };

  const clickOnShowCardButton = () => {
    setShowButton(false);
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
        <AllTodos cardCount={cards?.length || 0} />
        <CompletedTodos completedCardsLength={completedCardsLength} />
      </div>
      {error}
      {cards && cards.length ? (
        <Column cards={cards} 
        removeCard={deleteCard} 
        onToggle={selectedCard} 
        />
      ) : (
        <p className="text-warning">No ToDo &#128060;</p>
      )}
    </div>
  );
};

