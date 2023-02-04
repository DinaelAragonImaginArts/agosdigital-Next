import React from 'react'
import styles from '../styles/QueHacemos.module.css';
import LayoutNegro from '../components/Layout/Layout2';
const QueHacemos = () => {
  return (
    <>
      <LayoutNegro>
        <div className={styles.container}>
          <div className={styles.infografiaContainer}>
            <div className={styles.infografia} >
            </div>
            <div className={styles.infografia} >
            </div>
            <div className={styles.infografia} >
            </div>
          </div>
        </div>
      </LayoutNegro>
    </>
  )
}

export default QueHacemos