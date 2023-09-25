import "../../assets/css/style.css"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Logo from "../../assets/images/logo-idwall.svg"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Person from "../../assets/images/person-outline.svg"

export const FormSenha = () => {
  const navigate = useNavigate()
  return (
    <section id="bg-login">
      <div className="container">
        <div id="box-login">
          <div className="box">
            <img className="logo-login" src={Logo} alt="Logo Idwall" />
            <h2>Recuperar senha</h2>
            <h6 className="pb-4 gray">
              Digite o seu email para restaurar a sua senha
            </h6>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
              className="mb-3 person"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <Button className="login">Enviar</Button>
            <div className="pt-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSenha
