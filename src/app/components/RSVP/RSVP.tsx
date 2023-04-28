'
import React from 'react'
import Aisle from '../Aisle/Aisle/Aisle'
import Topnav from '../Topnav/Topnav'
import RSVPForm from './RSVPForm/RSVPForm'
import styles from './styles.module.scss'

export default function RSVP() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      <div className={styles['content']}>
        <RSVPForm userId='1234' />
      </div>
    </div>
  )
}