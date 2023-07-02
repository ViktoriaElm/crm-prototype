import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppMenu from "../components/AppMenu";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Fragment } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <AppMenu />
          <Component {...pageProps} />
        </Box>
    </Fragment>
  )
}
