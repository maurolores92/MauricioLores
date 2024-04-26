import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import '../styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("G-KQDVBTR0HB");
    ReactGA.pageview(window.location.pathname);

    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Creamos tu pagina web desde 0, usando todos las herramientas disponibles y actualizadas para que tengas un " />
        <meta name="keywords" content="Creamos tu pagina web desde 0, diseñamos, rediseñamos y programamos tu sitio web, del lado del cliente. Usando las habilidades y nuevas tendencias tecnologicas en el campo del diseño y desarrollo de aplicaciones web en general." />
        <meta property="og:title" content="Mauricio Lores | Front End Developer" />
        <meta property="og:description" content="Creamos tu pagina web desde 0, diseñamos, rediseñamos y programamos tu sitio web, del lado del cliente. Usando las habilidades y nuevas tendencias tecnologicas en el campo del diseño y desarrollo de aplicaciones web en general. " />
        <meta property="og:image" content="/images/logo/logofondoblanco-removebg-preview.png" />
        <meta property="og:url" content="https://maurolores92.github.io/portafolio/" />
        <meta property="og:site_name" content="Mauricio Lores | Developer Front-End" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png" />
        <link rel="manifest" href="assets/img/site.webmanifest" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
