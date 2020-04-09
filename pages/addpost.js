import React from 'react';
import Layout from '../components/layout/Layout';
import { Typography, Container, Box } from '@material-ui/core';

const addpost = () => {
  return (
    <Layout>
      <Container>
        <Box>
          <Typography>Add Post</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default addpost;
