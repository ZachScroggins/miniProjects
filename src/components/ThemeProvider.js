import { useContext, useEffect } from 'react';
import ColorContext from '../context/color/colorContext';
import checkClient from '../utils/checkClient';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { useState } from 'react';

const ThemeProvider = props => {
  const colorContext = useContext(ColorContext);

  const { primaryMain, secondaryMain, type } = colorContext;

  const [htmlFontSize, setHtmlFontSize] = useState(16);

  let innerWidth;
  let dpr;
  let resolutionWidth;
  const scaleFactor = 1.25;

  useEffect(() => {
    checkClient(() => {
      innerWidth = window.innerWidth;
      dpr = window.devicePixelRatio;
      resolutionWidth = innerWidth * dpr;
      if (resolutionWidth === 1920 && dpr === 1.5) {
        // htmlFontSize === 16 * scaleFactor;
        setHtmlFontSize(htmlFontSize * scaleFactor);
      }
    });
  }, []);

  // Create a theme instance.
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryMain,
      },
      secondary: {
        main: secondaryMain,
      },
      type,
    },
    typography: {
      htmlFontSize: htmlFontSize,
      h6: {
        fontWeight: 400,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export const themeColor = '#3f51b5';

export default ThemeProvider;
