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
    palette: {},
  };

  const [state, dispatch] = useReducer(ColorReducer, initialState);

  const setColor = () => {};

  const clearColor = () => {};

  const setType = () => {};

  return (
    <ColorContext.Provider
      value={{
        palette: state.palette,
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
