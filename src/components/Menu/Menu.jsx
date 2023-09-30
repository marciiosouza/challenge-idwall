// import './Menu.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import logoNav from '../../assets/images/logo-idwall.svg';
// import { useNavigate } from 'react-router-dom';

// export const Menu = () => {
//   const navigate = useNavigate ()
//   return (
//     <Navbar expand="lg" className="nav-bg">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img id="logo-nav" src={logoNav} alt="Logo idwall" /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto inner-text">
//             <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
//             <Nav.Link href="#servicos_" className="nav-link">Serviços</Nav.Link>
//             <Nav.Link href="#sobre-o-projeto" className="nav-link">Sobre o Projeto</Nav.Link>
//             <Nav.Link href="#contato" className="nav-link">Contato</Nav.Link>
//           </Nav>
//           <ion-icon name="person-outline" className="icon-login"></ion-icon>
//           <Button variant="" className="btn-login" onClick={() => navigate ("/login")} >Login</Button>
//           <Button variant="" className="btn-cadastrar" onClick={() => navigate ("/cadastro")}>Cadastrar</Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default Menu

// Menu.js
import './Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logoNav from '../../assets/images/logo-idwall.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'; 

export const Menu = () => {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className=" nav-bg bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand>
          <img id="logo-nav" src={logoNav} alt="Logo idwall" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto inner-text cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
            <Link to="servicos" smooth={true} duration={500} className="nav-link">Serviços</Link>
            <Link to="sobre-o-projeto" smooth={true} duration={500} className="nav-link">Sobre o Projeto</Link>
            <Link to="contato" smooth={true} duration={500} className="nav-link">Contato</Link>
          </Nav>
          <ion-icon name="person-outline" className="icon-login"></ion-icon>
          <Button variant="" className="btn-login" onClick={() => navigate ("/login")} >Login</Button>
          <Button variant="" className="btn-cadastrar" onClick={() => navigate ("/cadastro")}>Cadastrar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
