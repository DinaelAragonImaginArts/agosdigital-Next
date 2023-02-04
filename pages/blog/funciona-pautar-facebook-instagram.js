import LayoutNegro from "../../components/Layout/Layout2"
import { useEffect, useState } from "react"
import Head from "next/head";

const funcionaPautarFacebook = () => {
    const [path, setPath] = useState('');
    useEffect(() => {
        setPath(window.location.href);
    }, [])

    const post = [{
        titulo: "¿Todavía funciona pautar en Facebook e Instagram?",
        subtitulo: 'Conoce los mitos y realidades sobre los ads en META en 2023, y prepárate para crear las mejores campañas de ads en Facebook, Instagram y WhatsApp Business.',
        autor: 'Zamara González',
        autor_imagen: '/post/perfil/ZAM.png',
        img: '/post/Todavia_funciona_pautar_en_Facebook_e_Instagram.png',
        texto: `Con la explosión de nuevas plataformas de redes sociales como TikTok, y su posterior apertura a la creación de pautas y campañas directamente en la aplicación –sin necesidad de utilizar agencias externas de influencers o ads “orgánicos”–, muchos usuarios y expertos en marketing digital auguraban una caída de META como herramienta central para estrategias de ads en redes sociales.

Aunque es verdad que TikTok y otras redes en tendencia se han fortalecido como outlets de ads, parece que META –compuesto por Facebook, Instagram, Messenger y WhatsApp– no ha terminado de dar pelea. El gran flujo de audiencias en estas redes novedosas no ha mermado el impacto ni la inversión que las campañas integrales destinan a redes veteranas, como Facebook e Instagram.

Los reportes internos y externos de 2022 reflejan que las redes sociales de META siguen siendo centrales para la creación de comunidades de audiencias, el fortalecimiento de la comunicación con dichas audiencias y, por supuesto, como foco de inversión para estrategias de marketing en todas las áreas del mercado.

A continuación, te presentamos algunos mitos y realidades alrededor de los ads de META en 2023; y qué aspectos debes considerar al momento de crear propuestas de campañas en redes sociales integrales, que consideren el campo digital con un panorama de 360 grados, y con las que puedas llevar la visión de tus clientes hacia el éxito.

1. “Cada vez sale más caro que un anuncio de Facebook funcione”.

FALSO:
Aunque el precio del CPM (Costo Por Millar; es decir, la inversión que haces para lograr alcance o reconocimiento de marca) ha aumentado constantemente desde 2019, el CPC (Costo Por Clic, el cual te genera la interacción necesaria para lograr conversiones) se ha mantenido estable desde 2017, con un promedio de ¢40 USD por clic en tu ad. Esto quiere decir que la inversión que requieres para conseguir la misma cantidad de clics/ventas a través de ads en Facebook es más o menos la misma que hace 5 años, durante el boom de las pautas en Facebook.

2. “Los anuncios de Facebook e Instagram no se traducen en ventas, sólo es reconocimiento”.

FALSO:
El usuario promedio de las plataformas META (Facebook, Instagram, Messenger y WhatsApp) le da clic a 12 anuncios al mes; además, 78% de los consumidores de EEUU han hecho compras por ads que vieron en Facebook; y finalmente las redes sociales siguen siendo el segundo lugar entre las plataformas que usan las personas para investigar a una marca o producto. Los anuncios de las supuestas "plataformas en declive" siguen siendo una pieza clave para los consumidores potenciales, y no se limitan a grandes cifras en "reach" o reproducciones de video. Este punto se vuelve aún más sólido cuando consideramos las nuevas herramientas de META Ads 2023 para definir objetivos de campañas, que te permiten enfocarte en una gran variedad de métodos de conversión, sin desperdiciar presupuesto en reconocimiento que no te lleva a una venta.

3. “No pasa nada si mi negocio no pauta en Facebook e Instagram; puedo enfocar ese recurso en una sola red en tendencia, como TikTok”.

FALSO:
El reporte de Ads Library de META expone que desde 2020 sólo en México se sumó la cantidad de $984,909,536 USD en 877,458 ads (incluyendo ads sociales y políticos). Esto significa que el dinero que no estás invirtiendo en pautas de META sí lo está invirtiendo tu competencia.              
        `,
    },]

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

export default funcionaPautarFacebook