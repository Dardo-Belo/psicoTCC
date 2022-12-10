import React from 'react';
import "./Navbar.css";
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';

const Barra = () => {

  return(
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      
        <Navbar.Brand className="text-TCC" href="/">Psicología TCC Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-navbar" href="/quiénes somos">Quiénes somos</Nav.Link>
            <NavDropdown className="text-navbar" title="Tratamientos TCC" id="collasible-nav-dropdown">
              <NavDropdown.Item className='text-drop' href="Trastornos_de_Ansiedad">Trastornos de Ansiedad</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-drop' href="#action/3.2">
                Trastorno Bipolar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-drop'  href="#action/3.3">Depresión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-drop' href="#action/3.4">
                Trastornos Alimenticios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-navbar" href="/contáctanos">Contáctanos</Nav.Link>
            <Nav.Link className="text-navbar libros" href="/LibrosTCC">Libros a la Venta </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </header>);
  };

export default Barra;
  

