import "../../assets/css/style.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Logo from "../../assets/images/logo-idwall.svg";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";







export const Cadastro = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, confirmarSetSenha] = useState("")
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSenhaChange = (event) => {
    setSenha(event.target.value)
  }
  const handleConfirmarSenhaChange = (event) => {
    confirmarSetSenha(event.target.value)
  }
  const handleCadastro = async () => {
    
    try {
      // Faça sua lógica de autenticação aqui
      // Por exemplo, fazer uma solicitação de API para autenticar o usuário
      const response = await fetch('https://localhost:7213/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });
      if (response.ok) {
        navigate("/login") // Redirecione para a página de sucesso
      } else {
        setErro("Credenciais inválidas. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      setErro("Tente novamente mais tarde.")
    }
  }
  
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
              onChange={handleEmailChange}
              value = {email}
            >
              <Form.Control type="name" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingPassword"
              label="Senha"
              onChange={handleSenhaChange}
              value = {senha}
            >
              <Form.Control type="password" placeholder="Senha" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-4"
              controlId="floatingPassword"
              label="Confirmar senha"
              onChange={handleConfirmarSenhaChange}
              value = {confirmarSenha}
            >
              <Form.Control type="password" placeholder="Senha" />
            </FloatingLabel>
            <Button className="login" onClick={handleCadastro} >Criar conta</Button>
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
