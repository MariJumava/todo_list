import { ACTION_TYPES } from './Consts';

export const getCardsSuccess = (cards) => {
  return {
    type: ACTION_TYPES.GET_CARDS_SUCCESS,
    payload: cards,
  };
};

export const postCardSuccess = (cards) => {
  return {
    type: ACTION_TYPES.POST_CARD_SUCCESS,
    payload: cards,
  };
};

export const deleteCardSuccess = () => {
  return {
    type: ACTION_TYPES.DELETE_CARD_SUCCESS,
  };
};

export const putCardSuccess = () => {
  return {
    type: ACTION_TYPES.PUT_CARD_SUCCESS,
  };
};
  
export const cardFailure = (error) => {
  return {
    type: ACTION_TYPES.CARD_FAILURE,
    payload: error,
  };
};