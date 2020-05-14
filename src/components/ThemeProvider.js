import { useContext } from 'react';
import ColorContext from '../context/color/colorContext';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';

const ThemeProvider = props => {
  const colorContext = useContext(ColorContext);

  const { primaryMain, secondaryMain, type } = colorContext;

  // Create a theme instance.
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryMain
      },
      secondary: {
        main: secondaryMain
      },
      type
    }
  });

  theme = responsiveFontSizes(theme);

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export const themeColor = '#3f51b5';

export default ThemeProvider;
