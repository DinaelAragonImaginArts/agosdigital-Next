import React, {useState, useEffect} from 'react'
import styles from '../styles/QueHacemos.module.css';
import LayoutNegro from '../components/Layout/Layout2';
import Head from 'next/head';


const QueHacemos = () => {
  const [path, setPath] = useState('');
    useEffect(()=>{
        setPath(window.location.href);
    }, [])
  return (
    <>
      <Head>
        <meta property="fb:app_id" content="754725111402415" />
        <meta property="og:url" content={path} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="We think, we do, we deliver." />
        <meta property="og:description"
          content="Una forma innovadora de ser y hacer comunicación." />
        <meta property="og:image" content="/portada.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="agos.digital" />
        <meta property="twitter:url" content={path} />
        <meta name="twitter:title" content="We think, we do, we deliver." />
        <meta name="twitter:description"
          content="Una forma innovadora de ser y hacer comunicación." />
        <meta name="twitter:image" content="/portada.png" />
        <meta name="keywords"
          content="que es marketing digital, estrategias de marketing digital, comunicación y marketing digital, tecnicatura en marketing digital, ganar dinero con marketing digital, marketing digital tiktok, que es marketing digital y como funciona, benchmarking digital" />
      </Head>
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