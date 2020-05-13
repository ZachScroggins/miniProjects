import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { SvgIcon, Box } from '@material-ui/core';

export const styles = (theme) => {
  return {
    heroBackground: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      overflow: 'hidden',
    },
    heroSvg: {
      width: 'auto',
      height: '65em',
    },
    // heroSvg: {
    //   width: 'auto',
    //   height: '40em',
    // },
    secondary: {
      stopColor: theme.palette.secondary.main,
    },
    primary: {
      stopColor: theme.palette.primary.main,
    },
  };
};

const HeroBackground = React.forwardRef(function HeroBackground(props, ref) {
  const { classes, className, ...other } = props;

  return (
    <Box className={classes.heroBackground} ref={ref}>
      <svg
        // classes={{ root: classes.heroSvg }}
        className={classes.heroSvg}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1367 768'
      >
        <defs>
          <linearGradient
            id='linear-gradient'
            x2='1367'
            y1='269.69'
            y2='269.69'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' className={clsx(classes.secondary)}></stop>
            <stop offset='1' className={clsx(classes.primary)}></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#linear-gradient)'
          d='M0 517c99.76 87.4 310.23-112.9 527-61 213 51 307.92-158.18 503-100 171 51 337-94 337-94V0H0z'
        ></path>
      </svg>
    </Box>
  );
});

HeroBackground.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(HeroBackground);
