import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
       
          <meta name="description" content="Lucas Spartacus - Full Stack Developer" />
          <meta name="keywords" content="Lucas Spartacus, Full Stack Developer, Buzzvel" />
          <meta name="author" content="Lucas Spartacus" />
      
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
