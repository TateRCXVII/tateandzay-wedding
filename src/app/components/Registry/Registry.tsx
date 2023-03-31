import React from 'react'
import Aisle from '../Aisle/Aisle/Aisle'
import Countdown from '../Countdown/Countdown'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'

export default function Registry() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      <div className={styles['content']}>
        Registry
      </div>
    </div>
  )
}