import React from 'react'
import Image from 'next/image'
import logo from '/public/img/logo.png'
import styles from './header.module.scss'
const Header = () => {
  return (
    <>
    <div className={styles.customlogo}>
    <Image  alt='' width={190} height={120} src={logo}/>
  </div>
    <div className={styles.customlogomobile}>
      <Image  alt='' width={190} height={120} src={logo}/>
    </div>
    </>
  )
}

export default Header