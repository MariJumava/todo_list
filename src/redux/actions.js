import { ACTION_TYPES } from './Consts';

export const setCards = (cards) => {
  return {
    type: ACTION_TYPES.SET_CARDS,
    payload: cards,
  };
};

export const postCards = (card) => {
  return {
    type: ACTION_TYPES.POST_CARD,
    payload: card,
  };
};

export const deleteCard = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CARD,
    payload: id,
  };
};

export const putCard = (card) => {
  return {
    type: ACTION_TYPES.PUT_CARD,
    payload: card,
  };
};
  
export const cardFailure = (error) => {
  return {
    type: ACTION_TYPES.CARD_FAILURE,
    payload: error,
  };
};