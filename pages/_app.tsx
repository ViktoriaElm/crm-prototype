import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppMenu from '../components/AppMenu'

export default function App({ Component, pageProps }: AppProps) {
  return(<>
    <AppMenu/>
    <Component {...pageProps} />
    </>) 
  
}
