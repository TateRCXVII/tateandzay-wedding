import './globals.css'
import styles from './components/Topnav/styles.module.scss'
import localFont from '@next/font/local'
import Topnav from './components/Topnav/Topnav'

// const garamond = localFont({
// src: [
// {
//   path: '../../public/fonts/CormorantGaramond-LightItalic.ttf',
//   weight: '300'
// },
// {
//   path: '../../public/fonts/CormorantGaramond-Light.ttf',
//   weight: '300'
// },
// {
//   path: '../../public/fonts/CormorantGaramond-Regular.ttf',
//   weight: '400'
// },
// {
//   path: '../../public/fonts/CormorantGaramond-Italic.ttf',
//   weight: '400'
// },
// ],
// variable: '--font-garamond'
// })

export const metadata = {
  title: 'Tate and Zaylie',
  description: 'Eternally Happy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
