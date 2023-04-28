//create app.tsx for this project
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
export default MyApp