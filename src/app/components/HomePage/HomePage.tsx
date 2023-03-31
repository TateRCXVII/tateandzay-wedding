import React from 'react'
import Aisle from '../Aisle/Aisle/Aisle'
import Countdown from '../Countdown/Countdown'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'

export default function HomePage() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      <div className={styles['content']}>
        <Countdown date={'2023-06-09'} />
      </div>
    </div>
  )
}