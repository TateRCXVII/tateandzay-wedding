'use client'
import React from 'react'
import Button from '@mui/material/Button'
import styles from './styles.module.scss'

//create a top nav
export default function Topnav() {
  return (
    <div className={styles.topnav}>
      <div className={styles.header}>
        <text className={styles['header--title']}>TATE REYNOLDS</text>
        <text className={styles['header--subtitle']}>and</text>
        <text className={styles['header--title']}>ZAYLIE COLLINS</text>
      </div>
      <div className={styles.links}>
        <Button className={styles['links--button']} onClick={
          () => {
            window.location.href = '/'
          }
        }>home</Button>
        <Button className={styles['links--button']} onClick={
          () => {
            window.location.href = '/rsvp'
          }
        }>rsvp</Button>
        <Button className={styles['links--button']} onClick={
          () => {
            window.location.href = '/registry'
          }
        }>registry</Button>
        <Button className={styles['links--button']} onClick={
          () => {
            window.location.href = '/gallery'
          }
        }>gallery</Button>
      </div>
    </div >
  )
}