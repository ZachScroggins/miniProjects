import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const styles = theme => {
  return {
    heroContainer: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      overflow: 'hidden',
    },
    heroBackground: {
      width: 'auto',
      height: '45em',
      [theme.breakpoints.up('sm')]: {
        height: '52em',
      },
      [theme.breakpoints.up('lg')]: {
        height: '55.38461536em',
      },
    },
    secondary: {
      stopColor: theme.palette.secondary.main,
    },
    primary: {
      stopColor: theme.palette.primary.main,
    },
    secondaryMain: {
      fill: theme.palette.secondary.main,
    },
  };
};

const HeroBackground = React.forwardRef(function HeroBackground(props, ref) {
  const { classes } = props;

  return (
    <Box className={classes.heroContainer} ref={ref} id='home'>
      <svg
        className={classes.heroBackground}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 2731 539.39'
      >
        <defs>
          <linearGradient
            id='linear-gradient'
            x2='2731'
            y1='269.69'
            y2='269.69'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' className={clsx(classes.secondary)}></stop>
            <stop offset='.5' className={clsx(classes.primary)}></stop>
            <stop offset='1' className={clsx(classes.secondary)}></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#linear-gradient)'
          d='M1367,0H0V517c99.76,87.4,310.23-112.9,527-61,213,51,307.92-158.18,503-100,161.54,48.18,224-92.72,335.5-92.72,119.5,0,174,140.9,335.5,92.72,195.08-58.18,290,151,503,100,216.77-51.9,427.24,148.4,527,61V0Z'
        ></path>
      </svg>
    </Box>
  );
});

HeroBackground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroBackground);
