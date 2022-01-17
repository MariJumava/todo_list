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
} from './actions';
import axios from 'axios';

export const toggleCard = (card) => {
    return async (dispatch) => {
      try {
        dispatch(putCard());
  
        const responce = await axios.put(`http://localhost:3004/cards/${card.id}`, card);
  
        if (responce.status === 200) {
          dispatch(putCardSuccess());
          getCardsAsync()(dispatch);
        } else {
          dispatch(putCardFailure("ERROR"));
        }
      } catch (error) {
        dispatch(putCardFailure("ERROR!"));
      }
    };
};

export const getCardsAsync = () => {
    return async (dispatch) => {
      dispatch(getCards());
  
      const responce = await axios.get("http://localhost:3004/cards");
  
      if (responce.status === 200) {
        const cards = responce.data;
        dispatch(getCardsSuccess(cards));
      } else {
        dispatch(getCardsFailure("ERROR"));
      }
    };
};

export const addCardAsyncCall = (card) => {
    return async (dispatch) => {
      try {
        dispatch(postCard());
  
        const responce = await axios.post("http://localhost:3004/cards", card);
  
        if (responce.status === 201) {
          postCardSuccess();
          getCardsAsync()(dispatch);
        } else {
          dispatch(postCardFailure("Oops!"));
        }
      } catch (err) {
        dispatch(postCardFailure("Oops!"));
      }
    };
};

export const removeCard = (id) => {
    return async (dispatch) => {
      try {
        dispatch(deleteCard());
  
        const responce = await axios.delete(`http://localhost:3004/cards/${id}`);
  
        if (responce.status === 200) {
          dispatch(deleteCardSuccess());
          getCardsAsync()(dispatch);
        } else {
          dispatch(deleteCardFailure("Oops!"));
        }
      } catch (err) {
        dispatch(deleteCardFailure("Oops!"));
      }
    };
};


