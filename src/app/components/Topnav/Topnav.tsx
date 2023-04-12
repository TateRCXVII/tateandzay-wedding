'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.scss'

//create a top nav
export default function Topnav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleMobileLinkClick = (url: string) => {
    window.location.href = url;
    setMobileNavOpen(false);
  };

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileNavOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className={styles.topnav}>
      <div className={`${styles.header} ${styles['header--desktop']}`}>
        {/* Desktop header */}
        <text className={styles['header--title']}>TATE REYNOLDS</text>
        <text className={styles['header--subtitle']}>and</text>
        <text className={styles['header--title']}>ZAYLIE COLLINS</text>
      </div>
      <div className={`${styles.header} ${styles['header--mobile']}`}>
        <text className={styles['header--title']}>T & Z</text>
        <button
          className={styles['menu-toggle']}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <MenuIcon />
        </button>
      </div>
      <div className={`${styles.links} ${styles['links--desktop']}`}>
        {/* Desktop links */}
        <Button className={styles['links--button']} onClick={() => { window.location.href = '/' }}>home</Button>
        <Button className={styles['links--button']} onClick={() => { window.location.href = '/rsvp' }}>rsvp</Button>
        <Button className={styles['links--button']} onClick={() => { window.location.href = '/registry' }}>registry</Button>
        <Button className={styles['links--button']} onClick={() => { window.location.href = '/gallery' }}>gallery</Button>
      </div>
      {mobileNavOpen && (
        <div className={`${styles['links--mobile']} ${mobileNavOpen ? styles.open : isClosing ? styles.closing : ''}`}>
          <button
            className={styles['mobile-close-button']}
            onClick={() => handleCloseClick()}
          >
            <CloseIcon />
          </button>
          {/* Mobile links */}
          <Button className={styles['links--button']} onClick={() => handleMobileLinkClick('/')}>home</Button>
          <Button className={styles['links--button']} onClick={() => handleMobileLinkClick('/rsvp')}>rsvp</Button>
          <Button className={styles['links--button']} onClick={() => handleMobileLinkClick('/registry')}>registry</Button>
          <Button className={styles['links--button']} onClick={() => handleMobileLinkClick('/gallery')}>gallery</Button>
        </div>
      )}
    </div>
  );
}