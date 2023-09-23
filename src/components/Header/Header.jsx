import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto inner-text">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Sobre Nós</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Serviços</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Contato</Nav.Link>
          </Nav>
          <ion-icon name="person-circle-outline" className="icon-login"></ion-icon>
          <Button variant="" className="btn-login">Entrar</Button>{' '}
          <Button variant="" className="btn-cadastrar">Cadastrar</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header