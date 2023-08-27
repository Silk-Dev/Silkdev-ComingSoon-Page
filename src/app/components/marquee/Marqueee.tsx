"use client";
import React from 'react'
import styles from './marquee.module.scss'
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
const Marqueee = () => {
  let key = 0;
  const slogan = () => {
    return (<p key={key++}>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>FREE WEBSITE!</span> Offer ends soon.</p>)
  }
  return (

    <div className={styles.announcement}>
      <Marquee>
        <div className={`${styles.announcementtext} ${styles.text1}`}>
          {Array(2).fill(slogan())}
        </div>
        <div className={`${styles.announcementtext} ${styles.text2}`}>
          {slogan()}
        </div>
      </Marquee>
    </div>
  )
}

export default Marqueee
