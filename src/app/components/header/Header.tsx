import React from 'react'
import Image from 'next/image'
import logo from '/public/img/logo.png'
import styles from './header.module.scss'
const Header = () => {
  return (
    <div>
      <Image  alt='' width={160} height={80} src={logo} className={styles.logo}/>
    </div>
  )
}

export default Header