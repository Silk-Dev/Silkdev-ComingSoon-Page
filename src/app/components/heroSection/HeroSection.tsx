"use client";
import React, { useState }  from 'react'
import styles from './heroSection.module.scss'
import { motion } from "framer-motion"
import Image from 'next/image'
import illustration from 'public/img/3dillustration.png'
import Contact from '../contact/Contact';

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const onAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.movingDiv}
        initial={{ y: -50, opacity: 0, scale: 0.5 }} 
        animate={{ y: -20, opacity: 1, scale: 1 }} 
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className={styles.section}>
         <h1 className={styles.title}>Something Big <br></br>is Coming Your Way</h1>
         <motion.div
        className={styles.image}
        initial={{ y: -10 }} 
        animate={{ y: 5 }} 
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }} 
      >
        <Image alt='' width={300} height={100} src={illustration} />
      </motion.div>
      </div>
      <div>
      <motion.div
        className={styles.sCmovingDiv}
        initial={{ y: -50, opacity: 0, scale: 0.5 }} 
        animate={{ y: -10, opacity: 1, scale: 1 }} 
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} 
        onAnimationComplete={onAnimationComplete}
      />
      </div>
      <div className={styles.contactSection}>
      <Contact />
      </div>
    </div>
    
  )
}

export default HeroSection