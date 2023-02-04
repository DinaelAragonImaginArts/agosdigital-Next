import LayoutNegro from "../../components/Layout/Layout2"
import Head from "next/head";
import { useState, useEffect } from "react";

const queEsUgc = () => {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(window.location.href);
  }, [])
  const post = [{
    id: 1,
    titulo: "¿Qué es UGC?",
    subtitulo: 'Conoce las mejores estrategias para aprovechar el User Generated Content, y adéntrate en la era del contenido que sí funciona.',
    autor: 'Paula Vázquez',
    autor_imagen: '/post/perfil/PAULA.png',
    img: '/post/UGC_1.png',
    texto: `El contenido generado por el usuario (UGC, por las siglas en inglés de User Generated Content) es cualquier tipo de contenido creado y compartido por los usuarios de un sitio web, servicio o plataforma digital. Este contenido se distingue de aquel elaborado por los creadores o editores oficiales del sitio web o servicio. El UGC puede tomar muchas formas, incluidos texto, imágenes, videos y grabaciones de audio. El UGC generalmente se encuentra en plataformas de redes sociales, foros y otras comunidades en línea, pero también puede estar presente en sitios web de noticias, blogs y otros tipos de contenido en línea.

Uno de los beneficios clave del UGC es que permite a los usuarios expresarse y compartir sus perspectivas de una manera que no es posible a través de los medios tradicionales. Esto puede conducir a una experiencia en línea más diversa y dinámica, así como a una mayor participación y desarrollo de la comunidad.
    
Otra ventaja del UGC es que puede ayudar a generar confianza y credibilidad entre los usuarios. Cuando los usuarios ven que otras personas comparten sus propias experiencias y opiniones, es más probable que confíen en la información que ven y se sientan parte de una comunidad. Esto puede ser muy benéfico para las empresas, ya que puede ayudar a generar lealtad a la marca y un boca a boca positivo.
    
Sin embargo, también hay desventajas potenciales para el UGC. Una de las mayores preocupaciones es que puede ser difícil moderar y controlar el contenido que se comparte, lo que puede generar que se publique material ofensivo o inapropiado. Además, el UGC puede ser una fuente de responsabilidad legal, ya que es responsabilidad del sitio web o servicio garantizar que el contenido que se comparte sea legal y cumpla con las leyes o regulaciones aplicables.

En general, el UGC puede ser una herramienta poderosa para crear comunidades en línea e interactuar con los usuarios, pero es importante ser consciente de los riesgos potenciales y tener un plan para moderar y administrar el contenido que se comparte. Esto puede incluir el desarrollo de pautas y filtros para el contenido generado por el usuario, la implementación de herramientas de moderación y la capacitación del personal para manejar y responder a cualquier problema que pueda surgir.
    `,
  }]
  return (
    <>
      <Head>
        <meta name="description"
          content={`${post[0]?.subtitulo}`} />
        <meta property="fb:app_id" content="754725111402415" />
        <meta property="og:url" content={path} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agos Digital" />
        <meta property="og:description"
          content={`${post[0]?.subtitulo}`} />
        <meta property="og:image" content={`${post[0]?.img}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="agos.digital" />
        <meta property="twitter:url" content={path} />
        <meta name="twitter:title" content="Agos Digital" />
        <meta name="twitter:description"
          content={`${post[0]?.subtitulo}`} />
        <meta name="twitter:image" content={`${post[0]?.img}`} />
        <meta name="keywords"
          content="que es marketing digital, estrategias de marketing digital, comunicación y marketing digital, tecnicatura en marketing digital, ganar dinero con marketing digital, marketing digital tiktok, que es marketing digital y como funciona, benchmarking digital" />
      </Head>
      <LayoutNegro>
        <div className="postContent">
          <div className="imagenContenido">
            <img src={post[0]?.img} />
          </div>
          <div className="contenidoPost">
            <h1>{post[0]?.titulo}</h1>
            <h2>{post[0]?.subtitulo}</h2>
            <p>{post[0]?.texto}</p>
            <div className="autor">
              <h4>Por: {post[0]?.autor}</h4>
              <img src={post[0]?.autor_imagen} alt="imagen del autor" />
            </div>
          </div>
        </div>
      </LayoutNegro>
    </>
  )
}

export default queEsUgc;