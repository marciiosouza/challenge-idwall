import '../../assets/css/style.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/images/logo-idwall.svg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export const Login = () => {
    return (
      <>
        <Helmet>
          <title>idwall | Login </title>
        </Helmet>
        <section id="bg-login">
          <div className="container">
            <div id="box-login">
              <div className="box">
                <Link to="/"> <img className="logo-login" src={Logo} alt="Logo Idwall" /> </Link>
                <h2>Acessar conta</h2>
                <h6 className="pb-4 gray">
                  Faça login no sistema idwall para começar!
                </h6>
                <FloatingLabel
                  controlId="floatingInput"
                  label="E-mail"
                  className="mb-3 person"
                  required
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  className="pb-4"
                  controlId="floatingPassword"
                  label="Senha"
                  required
                >
                  <Form.Control type="password" placeholder="Senha" />
                </FloatingLabel>
                <Button className="login">Entar</Button>
                <div className="pt-5">
                  <Link className="senha mb-2" to="/recuperar-senha">
                    Esqueceu sua senha?
                  </Link>
                  <div className="row">
                    <p>
                      Não tem conta? &nbsp;
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
      </>
    )
  }

export default Login