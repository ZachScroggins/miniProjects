import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../src/components/layout/Layout';
import ColorState from '../src/context/color/ColorState';

import ThemeProvider from '../src/components/ThemeProvider';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>miniCMS</title>
      </Head>
      <ColorState>
        <ThemeProvider>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ColorState>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
