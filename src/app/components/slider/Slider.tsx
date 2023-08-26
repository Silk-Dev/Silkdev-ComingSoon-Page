"use client";
import React from 'react'
import styles from'./slider.module.scss'
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
const Slider = () => {
    
  return (

  <div className={styles.announcement}>
  <Marquee>
  <div className={`${styles.announcementtext} ${styles.text1}`}>
  <span>The first 5 businesses to sign up will get a free website! Offer ends soon.</span>
  <span>The first 5 businesses to sign up will get a free website! Offer ends soon.</span>
  </div>
  <div className={`${styles.announcementtext} ${styles.text2}`}>
  <span>The first 5 businesses to sign up will get a free website! Offer ends soon.</span>
  
  </div>
  </Marquee>
  </div>
  )
}

export default Slider
