import "../../assets/css/style.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Logo from "../../assets/images/logo-idwall.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Cadastro = () => {
  return (
    <>
     <Helmet>
      <title>idwall | Cadastro</title>
    </Helmet>

    <section id="bg-login">
      <div className="container">
        <div id="box-login">
          <div className="box">
            <Link to="/"> <img className="logo-login" src={Logo} alt="Logo Idwall" /> </Link>
            <h2>Criar conta</h2>
            <h6 className="pb-4 gray">
              Insira os dados para criar a sua conta.
            </h6>
            <FloatingLabel
              controlId="floatingInput"
              label="Usuário"
              className="mb-3"
            >
              <Form.Control type="name" placeholder="name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
              className="mb-3"
            >
              <Form.Control type="name" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingPassword"
              label="Senha"
            >
              <Form.Control type="password" placeholder="Senha" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-4"
              controlId="floatingPassword"
              label="Confirmar senha"
            >
              <Form.Control type="password" placeholder="Senha" />
            </FloatingLabel>
            <Button className="login">Criar conta</Button>
            <div className="pt-2">
              <div className="row">
                <p>
                  Já tenho conta &nbsp;
                  <Link className="senha" to="/login">
                    Logar
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

export default Cadastro
