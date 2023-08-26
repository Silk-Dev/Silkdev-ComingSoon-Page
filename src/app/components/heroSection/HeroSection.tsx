"use client";
import React from 'react'
import styles from './heroSection.module.scss'
import { motion } from "framer-motion"
import Image from 'next/image'
import illustration from 'public/img/3dillustration.png'

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.movingDiv}
        initial={{ y: -70, opacity: 0, scale: 0.5 }} // Initial position
        animate={{ y: -70, opacity: 1, scale: 1 }} // Target position
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} // Animation settings
      />
      <div className={styles.section}>
         <h1 className={styles.title}>Something Big <br></br>is Coming Your Way</h1>
         <Image alt='' width={300} height={100} src={illustration}/>
      </div>
      <motion.div
        className={styles.sCmovingDiv}
        initial={{ y: -70, opacity: 0, scale: 0.5 }} // Initial position
        animate={{ y: -70, opacity: 1, scale: 1 }} // Target position
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} // Animation settings
      />
    </div>
    
  )
}

export default HeroSection