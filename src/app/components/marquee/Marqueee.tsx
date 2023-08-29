"use client";
import React from 'react'
import styles from'./marquee.module.scss'
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
const Marqueee = () => {
    
  return (
<>
  <div className={styles.announcement}>
  <Marquee>
  <div className={`${styles.announcementtext} ${styles.text1}`}>
  <p>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>free website!</span> Offer ends soon.</p>
  <p>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>free website!</span> Offer ends soon.</p>
  </div>
  <div className={`${styles.announcementtext} ${styles.text2}`}>
  <p>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>free website!</span> Offer ends soon.</p>
  
  </div>
  </Marquee>
  </div>
  <div className={styles.announcementmobile}>
  <Marquee>
  <div className={`${styles.announcementtext} ${styles.text1}`}>
  <p>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>free website!</span> Offer ends soon.</p>
  <p>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>free website!</span> Offer ends soon.</p>
  </div>
  <div className={`${styles.announcementtext} ${styles.text2}`}>
  <p>The first <span className={styles.redText}>5 businesses</span> to sign up will get a <span className={styles.redText}>free website!</span> Offer ends soon.</p>
  
  </div>
  </Marquee>
  </div></>
  )
}

export default Marqueee