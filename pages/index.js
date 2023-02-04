import styles from '../styles/Home.module.css';
import Outro from '../utils/Outro';
import { useEffect, useState } from 'react';
import VideoDesk from '../components/VideoDesk';
import VideoMobil from '../components/VideoMobil';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const Home = () => {
  const [videoView, setVideoView] = useState(null);
  const [id, setId] = useState("1");
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(window.location.href);
  }, [])
  useEffect(() => {
    if ((window.screen.availWidth - window.screen.availHeight >= 0)) {
      setVideoView(true);
    }
    else {
      setVideoView(false);
    }
  }, []);

  const weAnimation = (diapositiva) => {
    setId(diapositiva);
  }
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
        {videoView == false ?
          <div>
            <div className={styles.banner_container}>
              <h1>
                <span>We Think </span>
                <span>We Do</span>
                <span>We Deliver</span>
              </h1>
              <div className={styles.outro}>
                <Outro />
              </div>
              <div className={styles.btnScroll}>
                <span></span>
              </div>
            </div>
            <div className={styles.videoRell} data-aos="fade-up" >
              <VideoMobil />
            </div>
            <div className={styles.weDescripcions}>
              <div className={styles.controls}>
                <button onClick={() => weAnimation("1")}>We Think </button>
                <button onClick={() => weAnimation("2")}>We Do</button>
                <button onClick={() => weAnimation("3")}>We Deliver</button>
              </div>
              <div className={styles.contenido}>
                <div className={id === "1" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive}  `}>
                  <h2>We Think</h2>
                  <p>El alma de una estrategia digital que funciona es el concepto <span className={styles.brunel}>creativo</span>. En Agos Digital queremos que tu proyecto alcance su potencial, por ello diseñamos tu concepto y estrategia a la medida para que cumplas todas tus metas. <span className={styles.brunel}>Ofrecemos: </span>Concepto creativo, Diseño de producto, Estrategia digital, Estrategia de posicionamiento, Campañas publicitarias, Estrategia de contenidos, Experiencia de usuarios y servicio al cliente, Estrategia de ventas, Capacitaciones y actualizaciones, Consultoría de negocios</p>
                </div>
                <div className={id === "2" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
                  <h2>We Do</h2>
                  <p>La <span className={styles.brunel}>forma</span> que toma tu estrategia comienza en la producción. Tenemos la capacidad de hacer realidad tu <span className={styles.brunel}>visión</span> mediante: Producción de video, Producción de audio, Fotografía de producto, Fotografía de retrato, Diseño gráfico, Animación y motion graphics, Diseño de identidad, Producción de contenido, Copywriting y redacción</p>
                </div>
                <div className={id === "3" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
                  <h2>We Deliver</h2>
                  <p>Haz que tu estrategia cause <span className={styles.brunel}>impacto</span>. En Agos Digital ejecutamos <span className={styles.brunel}>exitosamente</span> campañas a través de: Publicidad en todas las plataformas de redes sociales, Google Ads, Posicionamiento SEO, Diseño y gestión de campañas offline y BTL</p>
                </div>
              </div>
            </div>
          </div>
          :
          <div >
            <div className={styles.banner_container}>
              <h1>
                <span>We Think </span>
                <span>We Do</span>
                <span>We Deliver</span>
              </h1>
              <div className={styles.outro}>
                <Outro />
              </div>
              <div className={styles.btnScroll}>
                <span></span>
              </div>
            </div>
            <div className={styles.videoRell} data-aos="fade-up" >
              <VideoDesk />
            </div>
            <div className={styles.weDescripcions}>
              <div className={styles.controls}>
                <button className={id === "1" ? `${styles.amarillo}` : `${styles.deactive}`} onMouseEnter={() => weAnimation("1")}>We Think </button>
                <button className={id === "2" ? `${styles.rojo}` : `${styles.deactive}`} onMouseEnter={() => weAnimation("2")}>We Do</button>
                <button className={id === "3" ? `${styles.azul}` : `${styles.deactive}`} onMouseEnter={() => weAnimation("3")}>We Deliver</button>
              </div>
              <div className={styles.contenido}>
                <div className={id === "1" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive}  `}>
                  <h2>We Think</h2>
                  <p>El alma de una estrategia digital que funciona es el concepto <span className={styles.brunel}>creativo</span>. En Agos Digital queremos que tu proyecto alcance su potencial, por ello diseñamos tu concepto y estrategia a la medida para que cumplas todas tus metas. <span className={styles.brunel}>Ofrecemos: </span>Concepto creativo, Diseño de producto, Estrategia digital, Estrategia de posicionamiento, Campañas publicitarias, Estrategia de contenidos, Experiencia de usuarios y servicio al cliente, Estrategia de ventas, Capacitaciones y actualizaciones, Consultoría de negocios</p>
                </div>
                <div className={id === "2" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
                  <h2>We Do</h2>
                  <p>La <span className={styles.brunel}>forma</span> que toma tu estrategia comienza en la producción. Tenemos la capacidad de hacer realidad tu <span className={styles.brunel}>visión</span> mediante: Producción de video, Producción de audio, Fotografía de producto, Fotografía de retrato, Diseño gráfico, Animación y motion graphics, Diseño de identidad, Producción de contenido, Copywriting y redacción</p>
                </div>
                <div className={id === "3" ? `${styles.diapositiva} ${styles.active} ` : `${styles.diapositiva} ${styles.deactive} `}>
                  <h2>We Deliver</h2>
                  <p>Haz que tu estrategia cause <span className={styles.brunel}>impacto</span>. En Agos Digital ejecutamos <span className={styles.brunel}>exitosamente</span> campañas a través de: Publicidad en todas las plataformas de redes sociales, Google Ads, Posicionamiento SEO, Diseño y gestión de campañas offline y BTL</p>
                </div>
              </div>
            </div>
          </div>
        }
      </Layout>
    </>
  )
}

export default Home;