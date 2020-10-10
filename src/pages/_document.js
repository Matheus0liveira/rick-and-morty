import Document, { Html, Head, Main, NextScript } from 'next/document';



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

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"></link>

        </Head>

        <body>
          <Main />
        </body>

        <NextScript />

      </Html>

    );


  };
};