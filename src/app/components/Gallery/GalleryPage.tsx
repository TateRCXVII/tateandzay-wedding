import React from 'react'
import Topnav from '../Topnav/Topnav'
import styles from './styles.module.scss'
import Gallery from './GalleryCmpnt/Gallery'

export default function GalleryPage() {
  return (
    <div className={styles['homepage']}>
      <div className={styles['topnav']}>
        <Topnav />
      </div>
      {/* TODO firebase cloud storage */}
      <div className={styles['content']}>
        <Gallery />
      </div>
    </div>
  )
}