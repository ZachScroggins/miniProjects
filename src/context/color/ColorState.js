import { useReducer } from 'react';
import ColorContext from './colorContext';
import ColorReducer from './colorReducer';
import {
  SET_PALETTE_COLOR,
  CLEAR_PALETTE_COLOR,
  SET_PALETTE_TYPE,
} from '../types';

const ColorState = (props) => {
  const initialState = {
    primaryMain: '#3f51b5',
    secondaryMain: '#f50057',
    type: 'light',
  };

  const [state, dispatch] = useReducer(ColorReducer, initialState);

  const setColor = (primary, secondary) => {};

  const clearColor = () => dispatch({ type: CLEAR_PALETTE_COLOR });

  const setType = (prefersDarkMode) => {
    if (prefersDarkMode === true) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'dark' });
    }
    if (prefersDarkMode === false) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'light' });
    }
  };

  return (
    <ColorContext.Provider
      value={{
        primaryMain: state.primaryMain,
        secondaryMain: state.secondaryMain,
        type: state.type,
        setColor,
        clearColor,
        setType,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
