import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HeroBackground from '../src/components/layout/HeroBackground';
import HeroSVG from '../src/components/layout/HeroSVG';

const useStyles = makeStyles(theme => ({
  h2: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.9rem'
    },
    '@media (max-width: 350px)': {
      fontSize: '1.6rem'
    }
  },
  h3: {
    fontWeight: 300
  },
  textContainer: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  svgContainer: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container>
        <Grid
          item
          container
          // justify='flex-start'
          xs={12}
          md={6}
          className={classes.textContainer}
        >
          <Box pt={{ xs: 2, md: 10 }}>
            <Box color='secondary.contrastText'>
              <Typography
                variant='h2'
                component='h2'
                color='inherit'
                className={classes.h2}
              >
                A collection of small
              </Typography>
              <Typography
                variant='h2'
                component='h2'
                color='inherit'
                className={classes.h2}
              >
                JavaScript projects
              </Typography>
              <Box pt={2}>
                <Typography
                  variant='h4'
                  component='h3'
                  color='inherit'
                  className={classes.h3}
                >
                  Recreated with React
                </Typography>
              </Box>
            </Box>
            <Box pt={4}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                startIcon={<ArrowDownwardIcon />}
              >
                Check it out!
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item container className={classes.svgContainer} xs={12} md={6}>
          <Box pt={{ xs: 6, md: 10 }}>
            <HeroSVG />
          </Box>
        </Grid>
        <HeroBackground />
      </Grid>
    </Box>
  );
}
