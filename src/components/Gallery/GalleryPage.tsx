import React from 'react'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'
import Carousel from './GalleryCmpnt/Gallery'
// import the gallery component from react-photo-gallery
import Gallery from 'react-photo-gallery'

export default function GalleryPage() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      {/* TODO firebase cloud storage */}
      <div className={styles['content']}>
        <Carousel />
      </div>
    </div>
  )
}