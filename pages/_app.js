import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../src/components/layout/Layout';
import ColorState from '../src/context/color/ColorState';
import ThemeProvider from '../src/components/ThemeProvider';
import { CookiesProvider, Cookies } from 'react-cookie';

const isBrowser = () => typeof window !== 'undefined';

export default function MyApp(props) {
  const { Component, pageProps, cookies } = props;

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
        <title>miniProjects</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <CookiesProvider cookies={isBrowser() ? undefined : cookies}>
        <ColorState>
          <ThemeProvider>
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ColorState>
      </CookiesProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  function getCookies(ctx) {
    if (ctx && ctx.req && ctx.req.headers.cookie) {
      return new Cookies(ctx.req.headers.cookie);
    }

    return new Cookies();
  }

  const cookies = getCookies(ctx);

  return { pageProps, cookies };
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
  cookies: PropTypes.object.isRequired,
};
