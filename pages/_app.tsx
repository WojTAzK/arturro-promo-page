import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
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
