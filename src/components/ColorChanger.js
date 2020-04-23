import { useContext } from 'react';
import ColorContext from '../context/color/colorContext';
import PropTypes from 'prop-types';
import { rgbToHex, withStyles, useTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import { capitalize } from '@material-ui/core/utils';
import {
  NoSsr,
  Box,
  Grid,
  Input,
  Radio,
  Tooltip,
  Typography,
  Button,
  useMediaQuery,
  Paper,
  Hidden,
} from '@material-ui/core';

const hues = Object.keys(colors).slice(1, 17);
const shades = [
  900,
  800,
  700,
  600,
  500,
  400,
  300,
  200,
  100,
  50,
  'A700',
  'A400',
  'A200',
  'A100',
];

const styles = (theme) => ({
  radio: {
    padding: 0,
  },
  radioIcon: {
    width: 60,
    height: 60,
    [theme.breakpoints.up('md')]: {
      width: 96,
      height: 96,
    },
  },
  radioIconSelected: {
    width: 60,
    height: 60,
    border: '1px solid white',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: 96,
      height: 96,
    },
  },
  swatch: {
    width: 240,
    [theme.breakpoints.up('md')]: {
      width: 336 * 1.142857143,
    },
  },
  input: {
    width: 240,
    [theme.breakpoints.up('md')]: {
      width: 336 * 1.142857143,
    },
    display: 'block',
  },
  colorBar: {
    marginTop: theme.spacing(2),
  },
  colorSquare: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: 128,
      height: 128,
    },
  },
  button: {
    marginLeft: theme.spacing(1),
  },
});

function ColorChanger(props) {
  const { classes } = props;
  const theme = useTheme();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const colorContext = useContext(ColorContext);
  const { setColors, clearColors, primaryMain, secondaryMain } = colorContext;
  const defaults = { primary: primaryMain, secondary: secondaryMain };
  const [state, setState] = React.useState({
    primary: defaults.primary,
    secondary: defaults.secondary,
    primaryInput: defaults.primary,
    secondaryInput: defaults.secondary,
    primaryHue: 'blue',
    secondaryHue: 'pink',
    primaryShade: 4,
    secondaryShade: 11,
  });

  const handleChangeColor = (name) => (event) => {
    const isRgb = (string) =>
      /rgb\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\)/i.test(string);

    const isHex = (string) =>
      /^#?([0-9a-f]{3})$|^#?([0-9a-f]){6}$/i.test(string);

    let {
      target: { value: color },
    } = event;

    setState((prevState) => ({
      ...prevState,
      [`${name}Input`]: color,
    }));

    let isValidColor = false;

    if (isRgb(color)) {
      isValidColor = true;
    } else if (isHex(color)) {
      isValidColor = true;
      if (color.indexOf('#') === -1) {
        color = `#${color}`;
      }
    }

    if (isValidColor) {
      setState((prevState) => ({
        ...prevState,
        [name]: color,
      }));
    }
  };

  const handleChangeHue = (name) => (event) => {
    const {
      target: { value: hue },
    } = event;
    const color = colors[hue][shades[state[`${name}Shade`]]];

    setState({
      ...state,
      [`${name}Hue`]: hue,
      [name]: color,
      [`${name}Input`]: color,
    });
  };

  const handleChangeDocsColors = () => {
    const paletteColors = {
      primary: { main: state.primary },
      secondary: { main: state.secondary },
    };

    setColors(paletteColors.primary.main, paletteColors.secondary.main);
  };

  const handleResetDocsColors = () => {
    clearColors();
  };

  const colorBar = (color) => {
    const background = theme.palette.augmentColor({ main: color });

    return (
      <Box pt={1}>
        <Grid container className={classes.colorBar}>
          {['dark', 'main', 'light'].map((key) => (
            <div
              className={classes.colorSquare}
              style={{ backgroundColor: background[key] }}
              key={key}
            >
              <Typography
                variant='caption'
                style={{
                  color: theme.palette.getContrastText(background[key]),
                }}
              >
                {rgbToHex(background[key])}
              </Typography>
            </div>
          ))}
        </Grid>
      </Box>
    );
  };

  const colorPicker = (intent) => {
    const intentInput = state[`${intent}Input`];
    const intentShade = state[`${intent}Shade`];
    const color = state[`${intent}`];

    return (
      <Grid item container justify='center' xs={12} sm={6}>
        <Box pb={3}>
          <Typography
            component='label'
            gutterBottom
            htmlFor={intent}
            variant='h6'
          >
            {capitalize(intent)}
          </Typography>
          <Input
            id={intent}
            value={intentInput}
            onChange={handleChangeColor(intent)}
            color={intent === 'primary' ? 'primary' : 'secondary'}
            className={classes.input}
          />
        </Box>
        <div className={classes.swatch}>
          {hues.map((hue) => {
            const shade =
              intent === 'primary'
                ? shades[state.primaryShade]
                : shades[state.secondaryShade];
            const backgroundColor = colors[hue][shade];

            return (
              <Tooltip placement='right' title={hue} key={hue}>
                <Radio
                  className={classes.radio}
                  color='default'
                  checked={state[intent] === backgroundColor}
                  onChange={handleChangeHue(intent)}
                  value={hue}
                  name={intent}
                  aria-labelledby={`tooltip-${intent}-${hue}`}
                  icon={
                    <div
                      className={classes.radioIcon}
                      style={{ backgroundColor }}
                    />
                  }
                  checkedIcon={
                    <div
                      className={classes.radioIconSelected}
                      style={{ backgroundColor }}
                    >
                      <CheckIcon style={{ fontSize: 30 }} />
                    </div>
                  }
                />
              </Tooltip>
            );
          })}
        </div>
        {colorBar(color)}
      </Grid>
    );
  };

  return (
    <NoSsr>
      <Grid container spacing={5} className={classes.root}>
        {colorPicker('primary')}
        {colorPicker('secondary')}
        <Grid item container justify='center' xs={12} sm={6}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleChangeDocsColors}
            size={matches ? 'large' : 'medium'}
          >
            Set Colors
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handleResetDocsColors}
            className={classes.button}
            size={matches ? 'large' : 'medium'}
          >
            Reset
          </Button>
          <Hidden smDown>
            <div style={{ width: '115px' }}></div>
          </Hidden>
        </Grid>
      </Grid>
    </NoSsr>
  );
}

ColorChanger.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorChanger);
