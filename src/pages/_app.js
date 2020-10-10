import Head from 'next/head';

import { GlobalStyles } from '../assets/globalStyles';

import Header from '../compoenents/Header';

function MyApp({ Component, pageProps }) {



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