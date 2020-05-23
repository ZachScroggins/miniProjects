import Link from '../src/components/Link';
import HeroBackground from '../src/components/layout/HeroBackground';
import HeroSVG from '../src/components/layout/HeroSVG';
import ColorChanger from '../src/components/ColorChanger';
import TaskList from '../src/components/TaskList';
import JokeGenerator from '../src/components/JokeGenerator';
import LoanCalculator from '../src/components/LoanCalculator';
import CalorieTracker from '../src/components/CalorieTracker';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  h2: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.9rem',
    },
    '@media (max-width: 350px)': {
      fontSize: '1.6rem',
    },
  },
  h3: {
    fontWeight: 300,
  },
  textContainer: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  svgContainer: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  subtitle: {
    fontWeight: 300,
  },
  padding: {
    '@media (max-width: 350px)': {
      padding: 15,
    },
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container>
        <Grid item container xs={12} md={6} className={classes.textContainer}>
          <Box pt={{ xs: 2, lg: 0 }}>
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
                  Created with React
                </Typography>
              </Box>
            </Box>
            <Box pt={4}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                startIcon={<ArrowDownwardIcon />}
                component={Link}
                naked
                href='#changecolor'
              >
                Check it out!
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item container className={classes.svgContainer} xs={12} md={6}>
          <Box pt={{ xs: 6, md: 2, lg: 0 }} mb={{ xs: 15, md: 28, lg: 32 }}>
            <HeroSVG />
          </Box>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box height={80} id='changecolor'>
              {' '}
            </Box>
            <Paper elevation={3}>
              <Box p={3} className={classes.padding}>
                <Box pb={2}>
                  <Box pb={1}>
                    <Typography variant='h4' component='h2' align='center'>
                      Color Changer
                    </Typography>
                  </Box>
                  <Typography
                    variant='h6'
                    align='center'
                    className={classes.subtitle}
                  >
                    Change the color theme of the whole website.
                  </Typography>
                </Box>
                <Box pb={2}>
                  <Divider />
                </Box>
                <ColorChanger />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3} className={classes.padding}>
                <Box pb={2}>
                  <Typography variant='h4' component='h2' align='center'>
                    Task List
                  </Typography>
                  <Box py={2}>
                    <Divider />
                  </Box>
                  <TaskList />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3} className={classes.padding}>
                <Box pb={2}>
                  <Typography variant='h4' component='h2' align='center'>
                    Calorie Tracker
                  </Typography>
                  <Box py={2}>
                    <Divider />
                  </Box>
                  <CalorieTracker />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3} className={classes.padding}>
                <Box pb={2}>
                  <Typography variant='h4' component='h2' align='center'>
                    Loan Calculator
                  </Typography>
                  <Box py={2}>
                    <Divider />
                  </Box>
                  <LoanCalculator />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3} className={classes.padding}>
                <Box pb={2}>
                  <Box pb={1}>
                    <Typography
                      variant='h4'
                      component='h2'
                      align='center'
                      id='jokegenerator'
                    >
                      Joke Generator
                    </Typography>
                  </Box>
                  <Typography
                    variant='h6'
                    align='center'
                    className={classes.subtitle}
                  >
                    Fetch jokes from ICNDB API.
                  </Typography>
                  <Box py={2}>
                    <Divider />
                  </Box>
                  <JokeGenerator />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <HeroBackground />
      </Grid>
    </Box>
  );
}
