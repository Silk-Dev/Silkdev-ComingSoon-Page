import React from 'react'
import Image from 'next/image'
import logo from '/public/img/logo.png'
const Header = () => {
  return (
    <div>
      <Image  alt='' width={190} height={80} src={logo}/>
    </div>
  )
}

export default Header