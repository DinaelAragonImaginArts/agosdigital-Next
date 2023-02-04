import React from 'react'
import Layout from '../components/Layout/Layout';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  const isTop = true;
  return (
    <>
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