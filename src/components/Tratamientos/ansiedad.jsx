import React from "react";
import Button from 'react-bootstrap/Button';
import "./ansiedad.css";
const psicoImagen = require.context('../../imagenes', true);

const Ansiedad = () => {
    return (
        <div className="ansiedad">
        <h1 className="titulo h1"><br/>¿Qué es la ansiedad y cómo tratarla?</h1> <br/>

        <div className="titulo"><img className="w-50 titulo" src= { psicoImagen('./ansiedad.jpg') }alt="First slide"/></div>
        <br/>
        <h2>¿De qué hablamos cuando hablamos de ansiedad?</h2> 
        <p>¿Quién no se sintió ansioso alguna vez? ¿Quién no sintió síntomas relacionados con la ansiedad? No creo que muchas personas queden por fuera de esta problemática. Sobre todo, teniendo en cuenta el contexto en el cual nos encontramos. <br/>
        Hay una frase que para mi, Martina, representa perfectamente a la ansiedad y la utilizo muchísimo en la clínica, y es la siguiente: “mi vida estuvo llena de tragedias que nunca sucedieron”.<br/>
        Me parece fantástica, tan representativa y a su vez muy preocupante; ya que la ansiedad es exactamente eso, vivir de manera anticipada a los hechos. PREocuparnos por cosas que aún no sucedieron, que no son reales y que tal vez jamás lo sean. <br/>
        Pero, ¿cómo frenar estos pensamientos cuando realmente creemos que lo peor o más trágico está por suceder? ¿Cómo callamos nuestra mente “rumiante” de cadenas infinitas de pensamientos? ¿Cómo nos bajamos de ese tren que parece no tener fin? </p> <br/>   
        <h2>¿Qué es la ansiedad?</h2>  
        <p>Voy a empezar por comentar lo siguiente para que quien lea esto no desespere: la ansiedad es parte de la condición humana, todos la atravesamos en diferentes momentos y su función es realmente importante para protegernos ante un peligro. La ansiedad como mecanismo de defensa/supervivencia es realmente salvadora, al igual que el estrés. NO son malas palabras. <br/>
        El problema comienza cuando aquello por lo que nos sentimos ansiosos o amenazados NO es real, sino más bien una construcción de nuestra mente. <br/>
        La cuestión aquí es el mal uso o uso desproporcionado de dichas emociones. Y esto ocurre porque culturalmente jamás se les dio el lugar adecuado para profundizar en ellas. Sino que siempre fue más sencillo censurarlas y no llegar a atravesarlas como corresponde.  <br/>
        Entonces, ¿cómo podemos esperar que una persona esté preparada para trabajar en su ansiedad si siempre fue más fácil llenar su día de demás actividades y no pensar demasiado en las cosas que lo perturbaban? </p> <br/>   
        <h2>¿Cómo se trata la ansiedad en el consultorio?</h2>    
       
         <p>A mi personalmente la ansiedad me gusta trabajarla desde un lugar muy humano, sin juzgarla, ni etiquetándola de mala. Me parece que hay que darle el lugar que corresponde, porque por algo llego, por algo está aquí y algo viene a mostrarnos.  <br/>
         Creo sumamente importante llevar una vida sana y equilibrada, esto incluye una alimentación saludable, algo de ejercicio, un buen descanso, estar bien hidratados, implementar prácticas de meditación en nuestra vida diaria y lo más importante para mi, entender que los pensamientos son SOLO pensamientos, y que NO son nuestra realidad. Si somos capaces de verlo de aquella forma todo irá siendo cada vez más sencillo y en armonía.  </p> <br/>   
         <div className="mb-2"><Button href="/">Volver a la página principal</Button> {' '}</div>
        </div>
        );
};
export default Ansiedad;