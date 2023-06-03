import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import { AuthProvider } from '../context';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
// import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider theme={ lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>



    
  )
}

export default MyApp