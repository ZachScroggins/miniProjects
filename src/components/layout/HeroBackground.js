import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NoSsr } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    overflow: 'hidden',
  },
  heroSvg: {
    height: '65em',
    [theme.breakpoints.only('xs')]: {
      height: '50em',
    },
  },
}));

export default function HeroBackground() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <NoSsr>
      <div className={classes.heroBackground}>
        <svg
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
              {/* <stop offset='0' stopColor='#00f'></stop> */}
              <stop offset='0' stopColor={theme.palette.secondary.main}></stop>
              <stop offset='1' stopColor={theme.palette.primary.main}></stop>
            </linearGradient>
          </defs>
          <g data-name='Layer 2'>
            <g data-name='Layer 1'>
              <path
                fill={theme.palette.background.default}
                d='M0 188H1367V768H0z'
              ></path>
              <path
                fill='url(#linear-gradient)'
                d='M0 517c99.76 87.4 310.23-112.9 527-61 213 51 307.92-158.18 503-100 171 51 337-94 337-94V0H0z'
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </NoSsr>
  );
}
