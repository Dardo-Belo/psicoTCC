import React, { useState } from 'react'
import Plantilla from './Plantilla/Plantilla';
import "./productos.css"

const LibrosTcc = () => {

    const [productos] = useState([
        {
            name: 'Terapia cognitiva: Conceptos básicos y profundización Por Judith Beck',
            precio: 3000,
            id: 1,
            thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLgGSyIGD4E7bizLd2TUlPzS61MyEUpmg9EaLpWK2E804n2aXuVuug064B4dTMq2GSK8sRoD-ACw&usqp=CAc",
        },
        {
            name: 'The Beek Diet Soluction Por Judith Beck',
            precio: 35000,
            id: 2,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3hAiRTid4F61elDDTshFkzyEaapHL4LWqYaIW1PiZyRIzkVpPIaz0xI&s=0",
        },
        {
            name: 'Intervención Psicológica Conductual y Conductual-cognitiva',
            precio: 4000,
            id: 3,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStk0c60Yi2rQ2rDGM9AkRY2pFcgTMlHpv6KncTKn8&usqp=CAE&s",
        },
        

    ]);
    return (
        <main>
            <header className='titulo1'><h1>Libros TCC a la venta</h1></header>
            
            <section id="libros">
                {productos.map((producto) => {
                    return (
                        <Plantilla key={producto.id} name={producto.name} thumbnail={producto.thumbnail} precio={producto.precio} id={producto.id} />
                    );
                })}
            </section>
        </main>
    )
}

export default LibrosTcc;