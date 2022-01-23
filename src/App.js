import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Column } from './components/column/Column.js';
import { AddCard } from './components/addCard/AddCard.js';
import { CreateCard } from './components/createCard/CreateCard.js';
import { CompletedTodos } from './components/counters/AllTodos.js';
import { AllTodos } from './components/counters/AllTodos.js';
import { 
  getCardsSuccess,
  postCardSuccess,
  deleteCardSuccess,
  putCardSuccess,
  cardFailure, } from './redux/actions';
//import { toggleCard, getCardsAsync, addCardAsyncCall, removeCard } from './redux/thunk.js';

export const App = () => {
  const [showButton, setShowButton] = useState(true);
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch(); 

  useEffect(() => {
      getCardsAsync();
  }, []);

  const getCardsAsync = async () => {

    const responce = await axios.get('http://localhost:3000/cards');

    if (responce.status === 200 && responce.data) {
      dispatch(getCardsSuccess(cards));
    } else {
      dispatch(cardFailure('ERROR'));
    }
  }  

  const addCardAsyncCall = async (card) => {
    try {

      const responce = await axios.post('http://localhost:3000/cards', card);

      if (responce.status === 200) {
        postCardSuccess();
      } else {
        dispatch(cardFailure('Oops!'));
      }
    } catch (err) {
      dispatch(cardFailure('Oops!'));
    }
  };

  const removeCard = async (id) => {
    try {
      const responce = await axios.delete(`http://localhost:3000/cards/${id}`);

      if (responce.status === 200) {
        deleteCardSuccess();
      } else {
        dispatch(cardFailure('Oops!'));
      }
    } catch (err) {
      dispatch(cardFailure('Oops!'));
    }
  };

  const addCard = async (card) => {
    await addCardAsyncCall((cards) => [...cards, card]);
    setShowButton(true);
  };

  const toggleCard = async (card) => {
    try {
      const responce = await axios.put(
        `http://localhost:3000/cards/${card.id}`, card);

      if (responce.status === 200) {
        putCardSuccess();
      } else {
        dispatch(cardFailure('ERROR'));
      }
    } catch (error) {
      dispatch(cardFailure('ERROR!'));
    }
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
      {cards && cards.length ? (
        <Column cards={cards} 
        removeCard={removeCard} onToggle={toggleCard} />
      ) : (
        <p className="text-warning">No ToDo &#128060;</p>
      )}
    </div>
  );
};
//export default connect(null, mapDispatchToProps);??? как это переписать???
// export const mapDispatchToProps = (dispatch) => {
//   return {
//     saveEditedCard: (card) => {
//       dispatch(toggleCard (card));
//     },
//     getCards: () => dispatch(getCardsAsync()),
//     addCardAsync: (card) => dispatch(addCardAsyncCall(card)),
//     removeCard: (id) => dispatch(removeCard(id)),
//   };
// };  

