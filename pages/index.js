import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HeroBackground from '../src/components/layout/HeroBackground';
import HeroSVG from '../src/components/layout/HeroSVG';
import getContrastTextColor from '../src/utils/getContrastTextColor';
import { light } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
  h2: {
    color: getContrastTextColor('secondary.main'),
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
  },
  h3: {
    color: getContrastTextColor('secondary.main'),
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1em',
      fontWeight: 300,
    },
  },
}));

export default function Index() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container direction='row' justify='center' spacing={1}>
      <Grid item xs={12} md={6}>
        <Box pt={{ xs: 3, md: 10 }} justifyContent='center'>
          <Typography variant='h3' component='h2' className={classes.h2}>
            A collection of small
          </Typography>
          <Typography variant='h3' component='h2' className={classes.h2}>
            JavaScript projects
          </Typography>
          <Box pt={2}>
            <Typography variant='h5' component='h3' className={classes.h3}>
              Recreated with React
            </Typography>
          </Box>
          <Box pt={4}>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              startIcon={<ArrowDownwardIcon />}
            >
              Check it out!
            </Button>
          </Box>
        </Box>
      </Grid>
      <HeroBackground />
      <Grid item xs={12} md={6}>
        <Box pt={{ xs: 6, md: 10 }}>
          <HeroSVG />
        </Box>
      </Grid>
    </Grid>
  );
}
