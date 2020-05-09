import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, NoSsr, Box, Button } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HeroBackground from '../src/components/layout/HeroBackground';
import HeroSVG from '../src/components/layout/HeroSVG';
import getContrastTextColor from '../src/utils/getContrastTextColor';

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

export default function Index() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Box pt={{ xs: 3, md: 10 }}>
          <Typography
            variant='h3'
            component='h1'
            // style={{
            //   color: getContrastTextColor('secondary.main'),
            // }}
          >
            A collection of small JavaScript projects
          </Typography>
          <Box pt={2}>
            <Typography
              variant='h5'
              // style={{
              //   color: getContrastTextColor('secondary.main'),
              // }}
            >
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
