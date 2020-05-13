import { useReducer } from 'react';
import { useCookies, Cookies } from 'react-cookie';
import ColorContext from './colorContext';
import ColorReducer from './colorReducer';
import {
  SET_PALETTE_COLOR,
  CLEAR_PALETTE_COLOR,
  SET_PALETTE_TYPE,
} from '../types';

const ColorState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  function ifCookies() {
    const paletteBool = cookies.palette !== undefined ? true : false;
    return paletteBool;
  }

  const [state, dispatch] = useReducer(ColorReducer, {
    primaryMain: ifCookies() ? cookies.palette.primaryMain : '#3f51b5',
    secondaryMain: ifCookies() ? cookies.palette.secondaryMain : '#f50057',
    type: ifCookies() ? cookies.palette.type : 'light',
  });

  const setColors = (primary, secondary) => {
    const colors = {
      primary,
      secondary,
    };

    dispatch({ type: SET_PALETTE_COLOR, payload: colors });

    setCookie(
      'palette',
      { primaryMain: primary, secondaryMain: secondary, type: state.type },
      { path: '/', maxAge: 60 * 60 * 24 * 30 }
    );
    // setCookie(
    //   'palette',
    //   { primaryMain: primary, secondaryMain: secondary },
    //   { path: '/', maxAge: 60 * 60 * 24 * 30 }
    // );
  };

  const clearColors = () => {
    const colors = {
      primary: '#3f51b5',
      secondary: '#f50057',
    };

    dispatch({ type: CLEAR_PALETTE_COLOR, payload: colors });

    // removeCookie('palette');
    setCookie(
      'palette',
      { primaryMain: '#3f51b5', secondaryMain: '#f50057', type: state.type },
      { path: '/', maxAge: 60 * 60 * 24 * 30 }
    );
  };

  // try using string called type as parameter and pass function 'light' or 'dark'
  const setType = (prefersDarkMode) => {
    if (prefersDarkMode === true) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'dark' });

      // setCookie('type', 'dark', { path: '/', maxAge: 60 * 60 * 24 * 30 });
      setCookie(
        'palette',
        {
          primaryMain: state.primaryMain,
          secondaryMain: state.secondaryMain,
          type: 'dark',
        },
        { path: '/', maxAge: 60 * 60 * 24 * 30 }
      );
    }
    if (prefersDarkMode === false) {
      dispatch({ type: SET_PALETTE_TYPE, payload: 'light' });

      // setCookie('type', 'light', { path: '/', maxAge: 60 * 60 * 24 * 30 });
      setCookie(
        'palette',
        {
          primaryMain: state.primaryMain,
          secondaryMain: state.secondaryMain,
          type: 'light',
        },
        { path: '/', maxAge: 60 * 60 * 24 * 30 }
      );
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
