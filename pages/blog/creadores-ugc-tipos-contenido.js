import LayoutNegro from "../../components/Layout/Layout2"
import Head from "next/head"
import { useEffect, useState } from "react"

const CreadoresUgcTiposContenido = () => {
    const [path, setPath] = useState('');
    useEffect(()=>{
        setPath(window.location.href);
    }, [])
    
    const post = [
        {
            titulo: "Creadores de UGC y tipos de contenido",
            subtitulo: 'Cualquier usuario puede ser creador de contenido, pero no cualquier proyecto puede transformar estos contenidos en campañas exitosas. Descubre los formatos y métodos más exitosos del UGC.',
            autor: 'Paula Vázquez',
            autor_imagen: '/post/perfil/PAULA.png',
            img: '/post/UGC_2.png',

            texto: `El contenido generado por el usuario, o UGC, es creado por personas que son usuarios de un sitio web o servicio, en lugar de los creadores o editores oficiales de dicha plataforma. Estas personas pueden provenir de una amplia gama de antecedentes y tener diferentes niveles de conocimientos y experiencia. Pueden incluir clientes, fanáticos, seguidores o cualquier otra persona que esté interesada en el sitio web o el servicio y quiera compartir sus pensamientos y opiniones.
    
Algunos ejemplos de contenido generado por el usuario incluyen:
    
Publicaciones en redes sociales 
Los usuarios pueden compartir texto, imágenes y videos en plataformas de redes sociales como Facebook, Twitter e Instagram. Esto puede incluir actualizaciones personales, fotos y videos cortos.

Publicaciones de blog 
Los usuarios pueden crear y compartir sus propias publicaciones de blog sobre una variedad de temas. Esto puede incluir historias personales, reseñas y artículos de opinión.

Reseñas en línea 
Los usuarios pueden compartir sus opiniones sobre productos y servicios en sitios web como Amazon, Yelp y TripAdvisor.

Publicaciones en foros 
Los usuarios pueden participar en discusiones en línea y compartir sus pensamientos e ideas sobre varios temas en foros de discusión.
    
Videos de YouTube: 
Los usuarios pueden crear y compartir sus propios videos en YouTube, esto puede incluir vlogs, tutoriales y reseñas de productos.
    
Podcasts 
Los usuarios pueden crear y compartir sus propios podcasts sobre una amplia gama de temas.
    
Fotos e imágenes
Los usuarios pueden compartir sus propias fotos e imágenes en sitios web, o plataformas como Instagram, Flickr y Pinterest.
    
Grabaciones de música y audio 
Los usuarios pueden compartir su propia música y grabaciones de audio en sitios web como SoundCloud y Bandcamp.
    
Fan fiction 
Los usuarios pueden crear y compartir sus propias historias y fan fiction basadas en personajes y universos literarios existentes.
    
Algunos de los beneficios del contenido generado por el usuario son los siguientes:
    
El UGC permite a los usuarios expresarse y compartir sus perspectivas de una manera que no es posible a través de los medios tradicionales.
Puede ayudar a generar confianza y credibilidad con los usuarios. Cuando los usuarios ven que otras personas comparten sus propias experiencias y opiniones, es más probable que confíen en la información que ven y se sientan parte de una comunidad.
También puede ayudar a las empresas a generar lealtad a la marca y un boca a boca positivo.
Ayuda a mejorar el posicionamiento SEO al proporcionar contenido nuevo y relevante en el sitio web.        
También puede ayudar a crear un sentido de comunidad y compromiso entre los usuarios.
    
Sin embargo, también existen desventajas potenciales en el contenido generado por el usuario, como:
    
Puede ser difícil moderar y controlar el contenido que se comparte, lo que puede conducir a la publicación de material ofensivo o inapropiado.
Puede ser una fuente de responsabilidad legal, ya que es responsabilidad del sitio web o servicio garantizar que el contenido que se comparte sea legal y cumpla con las leyes o regulaciones aplicables.
También puede llevar mucho tiempo revisar y monitorear el contenido que se comparte.
    
En general, el contenido generado por el usuario puede ser una herramienta poderosa para crear comunidades en línea e interactuar con los usuarios, pero es importante ser consciente de los riesgos potenciales y tener un plan para moderar y administrar el contenido que se comparte. Esto puede incluir el desarrollo de metodologías para la generación del UGC, la implementación de herramientas de moderación y la capacitación del personal para manejar y responder a cualquier problema que pueda surgir.        
            `,
        },
    ]
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
                    content={`${post[0]?.subtitulo}`}/>
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

export default CreadoresUgcTiposContenido