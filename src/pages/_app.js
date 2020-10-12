import { useEffect } from 'react';

import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';
import Head from 'next/head';

import { GlobalStyles } from '../assets/globalStyles';

import Header from '../compoenents/Header';

function MyApp({ Component, pageProps }) {



  const router = useRouter();



  useEffect(() => {

    const handleRouteChanges = url => gtag.pageview(url);

    router.events.on('routeChangeComplete', handleRouteChanges);

    return () => router.events.off('routeChangeComplete', handleRouteChanges);

  }, [router.events]);





  return (

    <>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}


export default MyApp;