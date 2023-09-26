import './Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logoNav from '../../assets/images/logo-idwall.svg';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate ()
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home">
          <img id="logo-nav" src={logoNav} alt="Logo idwall" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto inner-text">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Sobre Nós</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Serviços</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Contato</Nav.Link>
          </Nav>
          <ion-icon name="person-outline" className="icon-login"></ion-icon>
          <Button variant="" className="btn-login" onClick={() => navigate ("/login")} >Login</Button>
          <Button variant="" className="btn-cadastrar" onClick={() => navigate ("/cadastro")}>Cadastrar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu