import React from 'react'
import styles from './contact.module.scss'
import { InstagramFilled, LinkedinFilled,FacebookFilled } from '@ant-design/icons';
import Link from 'next/link';
const Contact = () => {
  return (
    <div className={styles.contact}>
        <Link href="https://www.linkedin.com/company/silkdev">
            <LinkedinFilled className={styles.icon}/>
        </Link>
        <Link href="https://www.instagram.com/silk.dev/">
            <InstagramFilled className={styles.icon2} />
        </Link>
        <Link href="https://www.facebook.com/silkdevcorp">
            <FacebookFilled className={styles.icon3} />
        </Link>
    </div>
  )
}

export default Contact