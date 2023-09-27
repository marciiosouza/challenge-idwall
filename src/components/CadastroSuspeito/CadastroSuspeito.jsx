import "./CadastroSuspeito.css"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

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
      const response = await fetch("https://localhost:7213/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      })
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
        <title>Admin | Cadastrar Suspeitos</title>
      </Helmet>

      <section id="bg-login">
        <div className="container">
          <div id="grid-suspeito">
            <div className="box-suspeito">
              {/* <div className="m-5 p-2">
                <h2>Suspeitos</h2>
                <h6 className="gray">
                  Insira os dados para para adicionar os suspeitos na lista
                </h6>
              </div> */}
              <Container>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Nome"
                      className="mb-3"
                      onChange={handleEmailChange}
                      value={email}
                    >
                      <Form.Control type="name" placeholder="Nome" />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel
                      controlId="formDate"
                      label="Data"
                      className="mb-3"
                      onChange={handleEmailChange}
                      value={email}
                    >
                      <Form.Control type="date" placeholder="Data" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Sexo"
                      className="mb-3"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option></option>
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col xs={6} md={4}>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Categoria"
                      className="mb-3"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        required
                      >
                        <option></option>
                        <option value="1">FBI</option>
                        <option value="2">Interpol</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col xs={12} md={4}>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Classificação"
                      className="mb-3"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option></option>
                        <option value="1" className="">
                          Amarelo
                        </option>
                        <option value="2" className="">
                          Vermelho
                        </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingInput"
                  label="Nacionalidade"
                >
                  <Form.Control type="password" placeholder="Senha" />
                </FloatingLabel>
                <Button className="btn-suspeito" onClick={handleCadastro}>
                  Cadastrar
                </Button>
               
               
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cadastro
