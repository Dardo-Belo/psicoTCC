import React from "react";
import "./quiénes_somos.css";
const psicoImagen = require.context('../../imagenes', true);

const Quiénes = () =>  {
    return (
       
       
     <header>
        <br/>
         <h1 className="header" >El Equipo de Psicología TCC Online puede ayudarte :</h1>
        <br/>
        <div className="text">
        <div className="misión">
<h4>Cuando te sentís mal, triste o angustiado. Cuando tenés un mal día en el trabajo o tu rutina cotidiana se torna gris, no te sientas solo, estamos para ayudarte.
    <br/>
Nuestro exclusivo Programa de 8 pasos y la posibilidad de tener tu psicólogo de forma virtual te ayudarán a alcanzar el bienestar psicológico, ahorrando tiempo y dinero.
<br/>
En un mundo globalizado que busca canales de comunicación más ágiles, Talkit es tu solución.</h4>
</div>
<br/>
<div className="misión">
    <ul> <h3>
        <li> Te conectamos con expertos psicólogos en terapia cognitivo conductual.</li>
        <li>Te brindamos varias herramientas y contenidos propios.</li>
        <li>Disponible para la comunidad hispano-hablante.</li>
        <li>Accesible cuando quieras, desde donde quieras.</li></h3>
    </ul>
</div>
</div>
     <img className="d-block w-100" src= { psicoImagen('./neuro4.jpeg') }alt="First slide"/>
     </header>
    );
};

export default Quiénes; 