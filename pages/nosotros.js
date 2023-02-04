import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import styles from '../styles/Nosotros.module.css';
import Head from 'next/head';

const Nosotros = () => {
  const [path, setPath] = useState('');
  useEffect(() => {
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
      <Layout>
        <div className={styles.nosotros_container}>
          <h1>COMUNICACIÓN DE VERDAD</h1>
          <p>Con más de 10 años de experiencia en Marketing, Publicidad y Estrategia de contenidos, somos la agencia de comunicación que te ayudará a posicionar ideas, marcas y proyectos, y alcanzar su potencial con una estrategia enfocada en hacer realidad tu visión. En Agos Digital nos apasiona analizar, entender y generar conexiones en comunidades, para crear una corriente transformadora de ser y hacer comunicación de la cual nos sentimos orgullosos.</p>
        </div>
      </Layout>
    </>

  )
}

export default Nosotros