import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import Logo from "../../assets/images/logo-idwall.svg"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSenhaChange = (event) => {
    setSenha(event.target.value)
  }

  const handleLogin = async () => {
    try {
      // Faça sua lógica de autenticação aqui
      // Por exemplo, fazer uma solicitação de API para autenticar o usuário

      if (authSuccessful) {
        navigate("/pagina-de-sucesso") // Redirecione para a página de sucesso
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
        <title>idwall | Login</title>
      </Helmet>
      <section id="bg-login">
        <div className="container">
          <div id="box-login">
            <div className="box">
              <Link to="/">
                <img className="logo-login" src={Logo} alt="Logo Idwall" />
              </Link>
              <h2>Acessar conta</h2>
              <h6 className="pb-4 gray">
                Faça login no sistema idwall para começar!
              </h6>
              <FloatingLabel
                controlId="floatingInput"
                label="E-mail"
                className="mb-3 person"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleEmailChange}
                  value={email}
                />
              </FloatingLabel>
              <FloatingLabel
                className="pb-4"
                controlId="floatingPassword"
                label="Senha"
              >
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  onChange={handleSenhaChange}
                  value={senha}
                />
              </FloatingLabel>
              <Button className="login" onClick={handleLogin}>
                Entrar
              </Button>
              {erro && <p className="text-danger">{erro}</p>}
              <div className="pt-5">
                <Link className="senha" to="/recuperar-senha">
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
