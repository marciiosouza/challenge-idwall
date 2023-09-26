import "../../assets/css/style.css"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Logo from "../../assets/images/logo-idwall.svg"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

export const ResetSenha = () => {
  
  return (

    <>
    <Helmet>
      <title>idwall | Resetar a senha</title>
    </Helmet>
    <section id="bg-login">
      <div className="container">
        <div id="box-login">
          <div className="box">
              <Link to="/"> <img className="logo-login" src={Logo} alt="Logo Idwall" /> </Link>
            <h2 className="pb-2">Recuperar senha</h2>
            <h6 className="pb-4 gray">
                Insira o seu e-mail de cadastro e receba <br/> as instruções de recuperação
            </h6>
            <FloatingLabel
              required
              controlId="floatingInput"
              label="E-mail"
              className="mb-3 person"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <Button className="login">Redefinir senha</Button>
            <div className="pt-5"></div>
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
    </section>
    </>
  )
}

export default ResetSenha
