import { useReducer } from 'react';
import ColorContext from './colorContext';
import ColorReducer from './colorReducer';
import checkClient from '../../utils/checkClient';
import useClientMemo from '../../utils/useClientMemo';
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

  useClientMemo(() => {
    typeLS = localStorage.getItem('palette_type');
  }, [typeLS]);

  useClientMemo(() => {
    colorsLS = JSON.parse(localStorage.getItem('palette_colors'));
    if (colorsLS !== null) {
      primaryLS = colorsLS.primary;
      secondaryLS = colorsLS.secondary;
    }
  }, []);

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

    checkClient(() => {
      localStorage.setItem('palette_colors', JSON.stringify(colors));
    });
  };

  const clearColors = () => {
    const colors = {
      primary: '#3f51b5',
      secondary: '#f50057',
    };

    dispatch({ type: CLEAR_PALETTE_COLOR, payload: colors });

    checkClient(() => {
      localStorage.removeItem('palette_colors');
    });
  };

  const setType = (prefersDarkMode) => {
    if (prefersDarkMode === true) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'dark' });

      checkClient(() => {
        localStorage.setItem('palette_type', 'dark');
      });
    }
    if (prefersDarkMode === false) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'light' });

      checkClient(() => {
        localStorage.setItem('palette_type', 'light');
      });
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
