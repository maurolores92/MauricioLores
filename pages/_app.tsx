
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
        <meta name="description" content="Mauricio Lores | Desarrollador Frontend - Diseñando y creando sitios web a medida para dar vida a tus ideas. Con experiencia en las últimas tecnologías y tendencias del desarrollo web, estoy aquí para ayudarte a construir una presencia en línea única y efectiva para tu proyecto o negocio." />
        <meta name="keywords" content="Desarrollo web, diseño web, frontend, diseño de sitios web, programación web, desarrollo de aplicaciones web, tecnologías web, desarrollador frontend, diseño responsivo, HTML, CSS, JavaScript, NextJs, React, NodeJs desarrollo web a medida"/>
        <meta property="og:title" content="Desarrollador Frontend | Diseño y Programación Web | Mauricio Lores"/>
        <meta property="og:description" content="Mauricio Lores | Desarrollador Frontend - Diseñando y creando sitios web a medida para dar vida a tus ideas. Con experiencia en las últimas tecnologías y tendencias del desarrollo web, estoy aquí para ayudarte a construir una presencia en línea única y efectiva para tu proyecto o negocio." />
        <meta property="og:image" content="http://imgfz.com/i/xsgHleE.png" />
        <meta property="og:url" content="https://www.mauriciolores.com.ar/" />
        <meta property="og:site_name" content="Desarrollador Frontend | Diseño y Programación Web | Mauricio Lores" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://www.mauriciolores.com.ar/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TTD5T0J839"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TTD5T0J839');`}}/>
        
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
