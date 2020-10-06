import Head from 'next/head';

function MyApp({ Component, pageProps }) {



  return (

    <>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp;