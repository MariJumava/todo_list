import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from './components/column/Column.js';
import { AddCard } from './components/addCard/AddCard.js';
import { CreateCard } from './components/createCard/CreateCard.js';
import { CompletedTodos } from './components/counters/AllTodos.js';
import { AllTodos } from './components/counters/AllTodos.js';
import { getCardsFailure } from './redux/actions';
import { toggleCard, getCardsAsync, addCardAsyncCall, removeCard } from './redux/thunk.js';

export const App = ({ saveEditedCard, getCards, addCardAsync, removeCard }) => {
  const [showButton, setShowButton] = useState(true);
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  const saveCard = (title) => {
    const card = cards.map(card => ({...card, completed: card.id === id ? !card.completed : card.completed})),

     card.title = title;
     saveEditedCard(card)
  }

  useEffect(() => {
    try {
      getCards();
    } catch (error) {
      dispatch(getCardsFailure('ERROR'));
    }
  }, []);

  const addCard = async (card) => {
    await addCardAsync((cards) => [...cards, card]);
    setShowButton(true);
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
        <Column cards={cards} removeCard={removeCard} toggleCard={saveCard} />
      ) : (
        <p className="text-warning">No ToDo &#128060;</p>
      )}
    </div>
  );
};
//export default connect(null, mapDispatchToProps);??? как это переписать???
export const mapDispatchToProps = (dispatch) => {
  return {
    saveEditedCard: (card) => {
      dispatch(toggleCard (card));
    },
    getCards: () => dispatch(getCardsAsync()),
    addCardAsync: (card) => dispatch(addCardAsyncCall(card)),
    removeCard: (id) => dispatch(removeCard(id)),
  };
};  

