// _app.tsx is a Next.js file that allows overriding and extending the default App component.
// it is the main entry point for all pages in the application.

import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
