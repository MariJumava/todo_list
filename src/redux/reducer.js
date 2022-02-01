import { ACTION_TYPES } from './Consts.js';

const initialState = {
  cards: [],
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type){
      case ACTION_TYPES.SET_CARDS:
        return {
          ...state,
          cards: action.payload,
        };
        
      case  ACTION_TYPES.POST_CARD:
        return {
          ...state,
          cards: [...state.cards, action.payload]
      
        };
    
      case  ACTION_TYPES.DELETE_CARD:
        return {
          ...state,
          cards: state.cards.filter(card => card.id !== action.payload)
        };
    
      case  ACTION_TYPES.PUT_CARD:
        return {
          ...state,
          cards: state.cards.map(card => {
            if (card.id === action.payload.id) {
              return action.payload
            }
          return card
          })
        }

      case ACTION_TYPES.CARD_FAILURE:
        return {
          ...state,
          error: action.payload,
        }; 

      default:
        return state;
  }
};
