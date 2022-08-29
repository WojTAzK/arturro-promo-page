import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Head from 'next/head';
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </>
  );
}

export default MyApp;
