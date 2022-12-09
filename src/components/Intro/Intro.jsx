import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Intro.css";
import { Carousel } from 'react-bootstrap';
const psicoImagen = require.context('../../imagenes', true);



const Calesita = () => {
      return (
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src= { psicoImagen('./neuro2.jpg') }alt="First slide"/>
            <Carousel.Caption>
              <h1 className='titulo'>Psicología TCC</h1>
              <p className='p'>Tratamientos validados cientificamente</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src= { psicoImagen('./neurociencia.jpg')}alt="Second slide"/>
            <Carousel.Caption>
              <h1 className='titulo'>Profesionales Certificados</h1>
              <p className='p'>El equipo de Psicología TCC Online cuenta con un staff de profesionales con más de 10 años de experiencia</p>
            </Carousel.Caption>
          </Carousel.Item>
       
        </Carousel>
      );
    }
export default Calesita;