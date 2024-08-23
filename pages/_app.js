import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Buzzvel Test</title>
        <link rel="Buzzvel page icon" href="/images/Buzzvel-icon.ico" />
      </Head>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
