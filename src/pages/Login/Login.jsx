import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import Logo from "../../assets/images/logo-idwall.svg"
import Alert from "react-bootstrap/Alert" 

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState(null) 

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
      const response = await fetch("https://localhost:7213/encontrarUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      })

      if (response.ok) {
        navigate("/admin") // Redirecione para a página de sucesso
      } else {
        setErro("Credenciais inválidas. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      setErro("Erro Inesperado")
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
              {/* Alerta Bootstrap para exibir mensagens de erro */}
              {erro && (
                <Alert variant="danger" className="mt-3">
                  {erro}
                </Alert>
              )}
              <div className="pt-5">
                <Link className="senha" to="/recuperar-senha">
                  Esqueceu sua senha?
                </Link>
                <div className="row">
                  <p>
                    Não tem conta? &nbsp;
                    <Link className="senha" to="/cadastro-usuario">
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
