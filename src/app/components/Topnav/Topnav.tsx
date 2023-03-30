import React from 'react'
import styles from './styles.module.scss'

//create a top nav
export default function Topnav() {
  return (
    <div className={styles.topnav}>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  )
}