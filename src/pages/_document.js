import Document, { Html, Head, Main, NextScript } from 'next/document';


import { GA_TRACKING_ID } from '../lib/gtag';


export default class MyDocument extends Document {


  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);


    ctx.renderPage = () => {
      initialProps({


        enhanceApp: App => App,

        enhanceComponent: Component => Component,


      });

    };

    return { ...initialProps };


  };

  render() {

    return (

      <Html>

        <Head>
          <link rel="shortcut icon" href="/rick.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"></link>

          {/* Global Site Tag (gtag.js) - Google Analitycs */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />


          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />

      </Html>

    );


  };
};