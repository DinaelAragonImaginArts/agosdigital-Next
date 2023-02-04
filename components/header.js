import { useState } from "react";
import Link from "next/link";

const Header = ({isTop}) => {
    const [active, setActive] = useState(false);
    const activateMenu = () => {
        setActive(!active);
    }

    return (
        <header className="headerContainer">
            <Link href={'/'}>
                <div className="logo">
                    {isTop ?
                        <img src="/agos.digital.png" alt="logo agos digital" width="100%" height={"100%"} />
                        :
                        <img src="/agos.digital_blanco.png" alt="logo agos digital" width="100%" height={"100%"} />
                    }
                </div>
            </Link>
            <div className="menuContainer">
                <div
                    className={!isTop ? "menuburger" : "menuBurgerBlack menuburger"} onClick={() => activateMenu()}>
                    <div className="burger"></div>
                    <div className={!active ? "burger" : "burgeropen"}></div>
                    <div className="burger"></div>
                </div>
            </div>
            <div className={active ? "active menubar" : "desactive menubar"}>
                <nav className={active ? "active navegacion" : "desactive navegacion"}>
                    <Link href={"/"} onClick={() => activateMenu()}>
                        Inicio
                    </Link>
                    <Link href={"nosotros"} onClick={() => activateMenu()}>
                        Nosotros
                    </Link>
                    <Link href={"que_hacemos"} onClick={() => activateMenu()}>
                        Qué hacemos
                    </Link>
                    <Link href={"blog"} onClick={() => activateMenu()}>
                        Blog
                    </Link>
                    <Link href={"contacto"} onClick={() => activateMenu()}>
                        Contáctanos
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header