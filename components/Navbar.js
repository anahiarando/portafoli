
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Acerca de mi</Nav.Link>
            <Nav.Link href="/habilidades">Habilidades</Nav.Link>
            <Nav.Link href="/proyecto">Proyectos</Nav.Link>
            <Nav.Link href="/experiencia">Experiencia laboral</Nav.Link>
            <Nav.Link href="/educacion">Educacion</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default BasicExample;



