import { useContext, useMemo } from 'react';
import ColorContext from '../context/color/colorContext';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

const ThemeProvider = (props) => {
  const colorContext = useContext(ColorContext);

  const { primaryMain, secondaryMain, type } = colorContext;

  // Create a theme instance.
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: primaryMain,
          },
          secondary: {
            main: secondaryMain,
          },
          type,
        },
      }),
    [primaryMain, secondaryMain, type]
  );

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export const themeColor = '#3f51b5';

export default ThemeProvider;
