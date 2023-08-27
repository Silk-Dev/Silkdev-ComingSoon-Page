"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './subMsg.module.scss'
import seccess from '/public/img/success.png'
import error from '/public/img/error.png'
const SubMsg = () => {
  const [isError, setError] = useState(false)
  return (
    <div className={styles.container} >
      {!isError &&
        <div className={styles.content}>
          <Image width={220} height={100} alt='' src={seccess} />
          <p className={styles.textMsg}>Thank you for reaching out to us !
            Your message has been successfully received.
          </p>
        </div>}
      {isError &&
        <div className={styles.content}>
          <Image width={220} height={100} alt='' src={error} />
          <p className={styles.textMsg}>Oups !, it seems there was an issue with submitting your message
            Our team has been notified and is actively working to resolve this issue.
          </p>
        </div>}
    </div>
  )
}

export default SubMsg