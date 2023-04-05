import React from 'react'
import Aisle from '../Aisle/Aisle/Aisle'
import Countdown from '../Countdown/Countdown'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'

export default function Gallery() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      {/* TODO firebase cloud storage */}
      <div className={styles['content']}>
        Gallery

      </div>
    </div>
  )
}