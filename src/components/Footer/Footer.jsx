import React from "react";
import Facelog from "../../logos/Facelog.png"
import Tubelog from "../../logos/Tubelog.png"
import "./Footer.css";

const Footer = () => {
return(
<footer className="pie bg-dark text-light">
            <p>© 2022 Copyright</p>
            <p>Todos los derechos reservados</p>
            <div className="linkdelpie">
            <img href="https://www.facebook.com/" src={Facelog} className="logo"  alt="ir a face"/>
            <img href="https://www.youtube.com/" src={Tubelog} className="logo" alt="ir a youtube"/>
            </div>

        </footer>
)
}

export default Footer;