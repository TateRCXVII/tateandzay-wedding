import React from 'react'
import Countdown from '../Countdown/Countdown'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'
import PhotosComponent from './Photos/Photos'
import LoveStory from '../LoveStory/LoveStory'

export default function HomePage() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      <div className={styles['photos']}>
        <PhotosComponent />
      </div>
      <div className={styles['content']}>
        <LoveStory />
        <Countdown date={'2023-06-09'} />
      </div>
    </div>
  )
}