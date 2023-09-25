import '../../assets/css/style.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/images/logo-idwall.svg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Login = () => {
  return (
    <section id="bg-login">
      <div className="container">
        <div id="box-login">
          <div className="box">
            <img className="logo-login" src={Logo} alt="Logo Idwall" />
            <h2>Acessar conta</h2>
            <h6 className="pb-4 gray">
              Faça login no sistema idwall para começar!
            </h6>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
              className="mb-3 person"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              className="pb-4"
              controlId="floatingPassword"
              label="Password"
            >
              <Form.Control type="password" placeholder="Senha" />
            </FloatingLabel>
            <Button className="login">Entar</Button>
            <div className="pt-5">
              <Link className="senha" to="/recuperar-senha">
                Esqueceu sua senha?
              </Link>
              <div className="row">
                <p>
                  Não tem conta?
                  <Link className="senha" to="/cadastro">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login