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
                <a href="https://www.facebook.com/" className="btn btn-primary bg-light logo"><img src={Facelog} className="logoimg" alt="ir a face"/></a>
                <a href="https://www.youtube.com/" className="btn btn-primary bg-light logo"><img src={Tubelog} className="logoimg" alt="ir a youtube"/></a>
            </div>
        </footer>
)
}

export default Footer;