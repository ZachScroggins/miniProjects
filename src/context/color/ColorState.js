import { useReducer } from 'react';
import { useCookies } from 'react-cookie';
import ColorContext from './colorContext';
import ColorReducer from './colorReducer';
import {
  SET_PALETTE_COLOR,
  CLEAR_PALETTE_COLOR,
  SET_PALETTE_TYPE,
} from '../types';

const ColorState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const initialState = {
    primaryMain: paletteSaved() ? cookies.palette.primaryMain : '#3f51b5',
    secondaryMain: paletteSaved() ? cookies.palette.secondaryMain : '#f50057',
    type: typeSaved() ? cookies.type : 'light',
  };
  const [state, dispatch] = useReducer(ColorReducer, initialState);

  function paletteSaved() {
    const value = cookies.palette !== undefined ? true : false;
    return value;
  }
  function typeSaved() {
    const value = cookies.type !== undefined ? true : false;
    return value;
  }

  const setColors = (primary, secondary) => {
    const colors = {
      primary,
      secondary,
    };

    dispatch({ type: SET_PALETTE_COLOR, payload: colors });

    setCookie(
      'palette',
      { primaryMain: primary, secondaryMain: secondary },
      { path: '/', maxAge: 60 * 60 * 24 * 30 }
    );
  };

  const clearColors = () => {
    const colors = {
      primary: '#3f51b5',
      secondary: '#f50057',
    };

    dispatch({ type: CLEAR_PALETTE_COLOR, payload: colors });

    removeCookie('palette');
  };

  const setType = (prefersDarkMode) => {
    if (prefersDarkMode === true) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'dark' });

      setCookie('type', 'dark', { path: '/', maxAge: 60 * 60 * 24 * 30 });
    }
    if (prefersDarkMode === false) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'light' });

      setCookie('type', 'light', { path: '/', maxAge: 60 * 60 * 24 * 30 });
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
