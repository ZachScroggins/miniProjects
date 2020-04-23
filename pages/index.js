import { Grid, Typography } from '@material-ui/core';

export default function Index() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h1'>
          Next.js SSG Material-UI Firebase Starter
        </Typography>
      </Grid>
    </Grid>
  );
}
