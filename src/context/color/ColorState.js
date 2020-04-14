import { useReducer, useMemo } from 'react';
import ColorContext from './colorContext';
import ColorReducer from './colorReducer';
import {
  SET_PALETTE_COLOR,
  CLEAR_PALETTE_COLOR,
  SET_PALETTE_TYPE,
} from '../types';

const ColorState = (props) => {
  let typeLS = null;
  let colorsLS = null;
  let primaryLS = null;
  let secondaryLS = null;

  useMemo(() => {
    if (typeof window !== 'undefined') {
      typeLS = localStorage.getItem('palette_type');
    }
  }, [typeLS]);

  useMemo(() => {
    if (typeof window !== 'undefined') {
      colorsLS = JSON.parse(localStorage.getItem('palette_colors'));
      if (colorsLS !== null) {
        primaryLS = colorsLS.primary;
        secondaryLS = colorsLS.secondary;
      }
    }
  }, [colorsLS]);

  const initialState = {
    primaryMain: primaryLS !== null ? primaryLS : '#3f51b5',
    secondaryMain: secondaryLS !== null ? secondaryLS : '#f50057',
    type: typeLS !== null ? typeLS : 'light',
  };

  const [state, dispatch] = useReducer(ColorReducer, initialState);

  const setColors = (primary, secondary) => {
    const colors = {
      primary,
      secondary,
    };

    dispatch({ type: SET_PALETTE_COLOR, payload: colors });

    if (typeof window !== 'undefined') {
      localStorage.setItem('palette_colors', JSON.stringify(colors));
    }
  };

  const clearColors = () => {
    const colors = {
      primary: '#3f51b5',
      secondary: '#f50057',
    };

    dispatch({ type: CLEAR_PALETTE_COLOR, payload: colors });

    if (typeof window !== 'undefined') {
      localStorage.removeItem('palette_colors');
    }
  };

  const setType = (prefersDarkMode) => {
    if (prefersDarkMode === true) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'dark' });
      if (typeof window !== 'undefined') {
        localStorage.setItem('palette_type', 'dark');
      }
    }
    if (prefersDarkMode === false) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'light' });
      if (typeof window !== 'undefined') {
        localStorage.setItem('palette_type', 'light');
      }
    }
  };

  return (
    <ColorContext.Provider
      value={{
        primaryMain: state.primaryMain,
        secondaryMain: state.secondaryMain,
        type: state.type,
        setColors,
        clearColors,
        setType,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
