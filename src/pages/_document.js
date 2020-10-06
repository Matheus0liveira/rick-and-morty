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

        <Head />

        <body>
          <Main />
        </body>

        <NextScript />

      </Html>

    );


  };
};