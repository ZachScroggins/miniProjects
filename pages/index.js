import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Button, Hidden } from '@material-ui/core';
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
    <Grid container spacing={1}>
      <Grid item container justify='center' xs={12} md={6}>
        <Box pt={{ xs: 3, md: 10 }} pl={{ md: 9 }}>
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
            <Hidden smUp>
              <Button
                variant='contained'
                color='primary'
                size='small'
                startIcon={<ArrowDownwardIcon />}
              >
                Check it out!
              </Button>
            </Hidden>
            <Hidden xsDown>
              <Button
                variant='contained'
                color='primary'
                size='large'
                startIcon={<ArrowDownwardIcon />}
              >
                Check it out!
              </Button>
            </Hidden>
          </Box>
        </Box>
      </Grid>
      <HeroBackground />
      <Grid item container justify='center' xs={12} md={6}>
        <Box pt={{ xs: 6, md: 10 }} pr={{ md: 9 }}>
          <HeroSVG />
        </Box>
      </Grid>
    </Grid>
  );
}
