import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useZoom } from '../utils/zoom';

function MyApp({ Component, pageProps }: AppProps) {
  useZoom("90%");

  return <Component {...pageProps} />;
}

export default MyApp;
