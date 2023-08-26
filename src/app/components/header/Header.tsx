import React from 'react'
import Image from 'next/image'
import logo from '/public/img/logo.png'
const Header = () => {
  return (
    <div>
      <Image alt='' width={150} height={100} src={logo}/>
    </div>
  )
}

export default Header