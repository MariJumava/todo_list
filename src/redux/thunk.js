import axios from 'axios';
import {
    setCards,
    postCards,
    deleteCard,
    putCard,
    cardFailure,
} from './actions';

export const setCardsAsync = () => {
    return async (dispatch) => {
  
      const responce = await axios.get('http://localhost:3000/cards');
    
    if (responce.status === 200 && responce.data) {
      dispatch(setCards(responce.data));
    } else {
      dispatch(cardFailure('ERROR'));
    }
    };
};

export const addCardAsyncCall = (card) => {
    return async (dispatch) => {
      try {

        const responce = await axios.post("http://localhost:3000/cards", card);
      if (responce.status === 201) {
        dispatch(postCards(responce.data));
      } 
    } catch (err) {
      dispatch(cardFailure('Oops!'));
    }
    };
};

export const removeCard = (id) => {
    return async (dispatch) => {
      try {

        const responce = await axios.delete(`http://localhost:3000/cards/${id}`);
      if (responce.status === 200) {
        dispatch(deleteCard(id));
      }
    } catch (err) {
      dispatch(cardFailure('Oops!'));
      }
    };
};

export const toggleCard = (card) => {
    return async (dispatch) => {
      try {

        const responce = await axios.put(
            `http://localhost:3000/cards/${card.id}`, card);
    
          if (responce.status === 200) {
            dispatch(putCard(card));
          } 
        } catch (error) {
          dispatch(cardFailure('ERROR!'));
      }
    };
};

