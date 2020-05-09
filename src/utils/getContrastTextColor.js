import { useTheme } from '@material-ui/core/styles';

const getContrastTextColor = (intent) => {
  const theme = useTheme();

  let color;

  switch (intent) {
    case 'primary.main':
      color = theme.palette.getContrastText(theme.palette.primary.main);
      break;
    case 'secondary.main':
      color = theme.palette.getContrastText(theme.palette.secondary.main);
      break;
    default:
      break;
  }

  return color;
};

export default getContrastTextColor;
