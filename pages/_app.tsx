import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
