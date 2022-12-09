import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contacto.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ContactForm() {
  const [state, handleSubmit] = useForm("xknedqvq");
  if (state.succeeded) {
      return (<div className="mb-2 formulario1"><p>Su consulta fue enviada exitosamente!!!</p>
     <Button href="/">Volver al inicio</Button> {' '}</div>);
  }
  return (
    <div className='formulario'>
    <Form className='formulario1' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type="name"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="dirección"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Correo Electrónico </Form.Label>
      
         <ValidationError prefix="Email" field="email" errors={state.errors}/>
        <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
      <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <Form.Control id="message" name="message" as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={state.submitting}> Enviar </Button>
      <br/>
     <div className="mb-2 "><Button href="/">Volver a la página principal</Button> {' '}</div>
     <div className="Form1"> </div>
      </Form> 
      </div> );

}
function BasicExample2() {
  return (
    <ContactForm />
  );
}
export default BasicExample2;