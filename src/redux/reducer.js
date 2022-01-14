import { ACTION_TYPES } from './Consts.js';

const initialState = {
  cards: [],
  error: '',
};

export const reducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.GET_CARDS_START) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.GET_CARDS_SUCCESS) {
    return {
      ...state,
      cards: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.GET_CARDS_FAILURE) {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.POST_CARD_START) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.POST_CARD_SUCCESS) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.POST_CARD_FAILURE) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_CARD_START) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_CARD_SUCCESS) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_CARD_FAILURE) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.PUT_CARD_START) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.PUT_CARD_SUCCESS) {
    return {
      ...state,
    };
  }

  if (action.type === ACTION_TYPES.PUT_CARD_FAILURE) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
