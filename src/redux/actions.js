import { ACTION_TYPES } from './Consts';

export const getCards = () => {
  return {
    type: ACTION_TYPES.GET_CARDS_START,
  };
};

export const getCardsSuccess = (cards) => {
  return {
    type: ACTION_TYPES.GET_CARDS_SUCCESS,
    payload: cards,
  };
};

export const getCardsFailure = (error) => {
  return {
    type: ACTION_TYPES.GET_CARDS_FAILURE,
    payload: error,
  };
};

export const postCard = (card) => {
  return {
    type: ACTION_TYPES.POST_CARD_START,
  };
};

export const postCardSuccess = () => {
  return {
    type: ACTION_TYPES.POST_CARD_SUCCESS,
  };
};

export const postCardFailure = (error) => {
  return {
    type: ACTION_TYPES.POST_CARD_FAILURE,
    payload: error,
  };
};

export const deleteCard = (card) => {
  return {
    type: ACTION_TYPES.DELETE_CARD_START,
  };
};

export const deleteCardSuccess = () => {
  return {
    type: ACTION_TYPES.DELETE_CARD_SUCCESS,
  };
};

export const deleteCardFailure = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CARD_FAILURE,
    payload: error,
  };
};

export const putCard = () => {
    return {
      type: ACTION_TYPES.PUT_CARD_START,
    };
  };
  
  export const putCardSuccess = () => {
    return {
      type: ACTION_TYPES.PUT_CARD_SUCCESS,
    };
  };
  
  export const putCardFailure = (error) => {
    return {
      type: ACTION_TYPES.PUT_CARD_FAILURE,
      payload: error,
    };
  };