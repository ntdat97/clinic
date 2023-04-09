import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ preload: false });
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={montserrat.className}/>
}
