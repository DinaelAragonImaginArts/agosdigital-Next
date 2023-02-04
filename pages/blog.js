import LayoutNegro from "../components/Layout/Layout2"
import Link from "next/link"
import styles from '../styles/Blog.module.css';
import { useState, useEffect } from "react";
import Head from "next/head";

const Blog = () => {
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
      <LayoutNegro>
        <div className={styles.blog_container}>
          <Link href={`/blog/funciona-pautar-facebook-instagram`} className={styles.card_blog}>
            <div className={styles.imagen} >
              <img src="/post/Todavia_funciona_pautar_en_Facebook_e_Instagram.png" />
            </div>
            <div className={styles.texto}>
              <h1>
                ¿Todavía funciona pautar en Facebook e Instagram?
              </h1>
              <p>
                Con la explosión de nuevas plataformas de redes sociales como TikTok, y su posterior apertura a la creación de pautas y campañas directamente en la aplicación –sin necesidad de utilizar agencias externas de influencers o ads “orgánicos”–, muchos usuarios y expertos en marketing digital auguraban una caída de META como herramienta central para estrategias de ads en redes sociales
              </p>
            </div>
          </Link>
          <Link href={`/blog/creadores-ugc-tipos-contenido`} className={styles.card_blog}>
            <div className={styles.imagen}>
              <img src="/post/UGC_2.png" />
            </div>
            <div className={styles.texto}>
              <h1>
                Creadores de UGC y tipos de contenido
              </h1>
              <p>
                El contenido generado por el usuario, o UGC, es creado por personas que son usuarios de un sitio web o servicio, en lugar de los creadores o editores oficiales de dicha plataforma. Estas personas pueden provenir de una amplia gama de antecedentes y tener diferentes niveles de conocimientos y experiencia. Pueden incluir clientes, fanáticos, seguidores o cualquier otra persona que esté interesada en el sitio web o el servicio y quiera compartir sus pensamientos y opiniones.
              </p>
            </div>
          </Link>
          <Link href={`/blog/que-es-ugc`} className={styles.card_blog}>
            <div className={styles.imagen}>
              <img src="/post/UGC_1.png" />
            </div>
            <div className={styles.texto}>
              <h1>
                ¿Qué es UGC?
              </h1>
              <p>
                El contenido generado por el usuario (UGC, por las siglas en inglés de User Generated Content) es cualquier tipo de contenido creado y compartido por los usuarios de un sitio web, servicio o plataforma digital. Este contenido se distingue de aquel elaborado por los creadores o editores oficiales del sitio web o servicio. El UGC puede tomar muchas formas, incluidos texto, imágenes, videos y grabaciones de audio. El UGC generalmente se encuentra en plataformas de redes sociales, foros y otras comunidades en línea, pero también puede estar presente en sitios web de noticias, blogs y otros tipos de contenido en línea.
              </p>
            </div>
          </Link>
        </div>
      </LayoutNegro>
    </>
  )
}

export default Blog