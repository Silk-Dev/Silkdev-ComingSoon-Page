import React from 'react'
import Image from 'next/image'
import logo from '/public/img/logo.png'
import styles from './header.module.scss'
const Header = () => {
  return (
    <div>
      <Image  className={styles.img} alt=''  src={logo}/>
   
    </div>
  )
}

export default Header