import React from 'react'
import styles from './contact.module.scss'
import { InstagramFilled, LinkedinFilled,FacebookFilled } from '@ant-design/icons';
const Contact = () => {
  return (
    <div className={styles.contact}>
    
        <InstagramFilled className={styles.iconContainer} style={{ fontSize: '35px'}} />
        <LinkedinFilled className={styles.iconContainer} style={{ fontSize: '35px' }} />
        <FacebookFilled className={styles.iconContainer} style={{ fontSize: '35px' }} />
    </div>
  )
}

export default Contact