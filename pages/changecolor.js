import React from 'react';
import Layout from '../components/layout/Layout';
import { Typography, Container, Box } from '@material-ui/core';

const changecolor = () => {
  return (
    <Layout>
      <Container>
        <Box>
          <Typography>Change Color</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default changecolor;
