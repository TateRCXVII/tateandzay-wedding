import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Countdown from './components/Countdown/Countdown'
import '../../styles/globals.css'
import Aisle from './components/Aisle/Aisle/Aisle'
import Topnav from './components/Topnav/Topnav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    //return a component with the countdown and aisle on a white background
    <div >
      <Topnav />
      <div>
        <Countdown date="2023-06-09" />
      </div>
      <div>
        <Aisle seatsCount={10} />
      </div>
    </div>
  )
}
