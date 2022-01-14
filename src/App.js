import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from './components/column/Column.js';
import { AddCard } from './components/addCard/AddCard.js';
import { CreateCard } from './components/createCard/CreateCard.js';
import { CompletedTodos } from './components/counters/CompletedTodos';
import { AllTodos } from './components/counters/AllTodos.js';
import {
  getCards,
  getCardsSuccess,
  getCardsFailure,
  postCard,
  postCardSuccess,
  postCardFailure,
  deleteCard,
  deleteCardFailure,
  deleteCardSuccess,
  putCard,
  putCardSuccess,
  putCardFailure,
} from './redux/actions';
import axios from 'axios';

export const App = () => {
  //const [cards, setCards] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      getCardsAsync();
    } catch (error) {
      dispatch(getCardsFailure('ERROR'));
    }
  }, []);

  const getCardsAsync = async () => {
    dispatch(getCards());

    const responce = await axios.get('http://localhost:3000/cards');

    if (responce.status === 200) {
      const cards = responce.data;
      dispatch(getCardsSuccess(cards));
    } else {
      dispatch(getCardsFailure('ERROR'));
    }
  };

  const addCardAsyncCall = async (card) => {
    try {
      dispatch(postCard());

      const responce = await axios.post('http://localhost:3000/cards', card);

      if (responce.status === 201) {
        postCardSuccess();
        await getCardsAsync();
      } else {
        dispatch(postCardFailure('Oops!'));
      }
    } catch (err) {
      dispatch(postCardFailure('Oops!'));
    }
  };

  const removeCard = async (id) => {
    try {
      dispatch(deleteCard());
      let responce = await axios.delete(`http://localhost:3000/cards/${id}`);

      if (responce.status === 200) {
        deleteCardSuccess();
        await getCardsAsync();
      } else {
        dispatch(deleteCardFailure('Oops!'));
      }
    } catch (err) {
      dispatch(deleteCardFailure('Oops!'));
    }
  };
  //setCards((cards) => cards.filter((card) => card.id !== id));
  const addCard = async (card) => {
    await addCardAsyncCall((cards) => [...cards, card]);
    setShowButton(true);
  };

  const toggleCard = async (card) => {
    try {
      dispatch(putCard());
      const responce = await axios.put(
        `http://localhost:3000/cards/${card.id}`, card);

      if (responce.status === 200) {
        dispatch(putCardSuccess());
        getCardsAsync()(dispatch);
      } else {
        dispatch(putCardFailure('ERROR'));
      }
    } catch (error) {
      dispatch(putCardFailure('ERROR!'));
    }
  };
  //const toggleCard = (id) => {
  // setCards(
  //   cards.map((card) => {
  //     if (card.id === id) {
  //       card.completed = !card.completed;
  //     }
  //     return card;
  //   })
  // );

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
