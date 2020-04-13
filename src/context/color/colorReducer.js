import {
  SET_PALETTE_COLOR,
  CLEAR_PALETTE_COLOR,
  SET_PALETTE_TYPE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_PALETTE_COLOR:
      return {
        ...state,
        primaryMain: action.payload.primary,
        secondaryMain: action.payload.secondary,
      };
    case CLEAR_PALETTE_COLOR:
      return {
        ...state,
        primaryMain: action.payload.primary,
        secondaryMain: action.payload.secondary,
      };
    case SET_PALETTE_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
