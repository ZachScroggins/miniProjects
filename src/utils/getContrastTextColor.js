import { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import checkClient from './checkClient';

const getContrastTextColor = (intent) => {
  const theme = useTheme();

  let color;

  // checkClient(() => {
  //   switch (intent) {
  //     case 'primary.main':
  //       color = theme.palette.getContrastText(theme.palette.primary.main);
  //       return color;
  //       break;
  //     case 'secondary.main':
  //       color = theme.palette.getContrastText(theme.palette.secondary.main);
  //       return color;
  //       break;
  //     default:
  //       break;
  //   }
  // });

  switch (intent) {
    case 'primary.main':
      color = theme.palette.getContrastText(theme.palette.primary.main);
      // return color;
      break;
    case 'secondary.main':
      color = theme.palette.getContrastText(theme.palette.secondary.main);
      // return color;
      break;
    default:
      break;
  }

  return color;
};

export default getContrastTextColor;
