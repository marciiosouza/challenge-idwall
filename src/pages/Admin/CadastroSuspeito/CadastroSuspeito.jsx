import "./CadastroSuspeito.css"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export const Cadastro = () => {
  const navigate = useNavigate()

  //Constates para cadastrar suspeito
  const [nomeSuspeito, setNomeSuspeitopain] = useState("")
  const [dataNascimentoSuspeito, setDataNascimentoSuspeito] = useState("")
  const [sexoSuspeito, setSexoSuspeito] = useState("")
  const [classificacao, setClassificacao] = useState("")
  const [naciolidadeSuspeito, setNacionalidadeSuspeito] = useState("")

  function changeNomeSuspeito(event) {
    setNomeSuspeitopain(event.target.value)
  }
  function changedataNascimentoSuspeito(event) {
    setDataNascimentoSuspeito(event.target.value)
  }
  function changeSexoSuspeito(event) {
    setSexoSuspeito(event.target.value)
  }
  function changeClassificacao(event) {
    setClassificacao(event.target.value)
  }
  const changeNacionalidadeSuspeito = (event) => {
    setNacionalidadeSuspeito(event.target.value)
  }

  const handleCadastro = async () => {
    try {
      // Faça sua lógica de autenticação aqui
      // Por exemplo, fazer uma solicitação de API para autenticar o usuário
      const response = await fetch("https://localhost:7213/Suspeito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nomeSuspeito,
          classificacao: classificacao,
          sexo: sexoSuspeito,
          nacionalidade: naciolidadeSuspeito,
        }),
      })
      if (response.ok) {
        navigate("/sus") // Redirecione para a página de sucesso
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
      <section id="bg-login">
        <div className="container">
          <div id="grid-suspeito">
            <div className="box-suspeito">
              <Container>
                <Row>
                  <Col md={4}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Nome"
                      className="mb-3"
                    >
                      <Form.Control
                        type="name"
                        placeholder="Nome"
                        value={nomeSuspeito}
                        onChange={changeNomeSuspeito}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4}>
                    <FloatingLabel
                      controlId="formDate"
                      label="Data"
                      className="mb-3"
                    >
                      <Form.Control
                        type="date"
                        placeholder="Data"
                        value={dataNascimentoSuspeito}
                        onChange={changedataNascimentoSuspeito}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={4}>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Sexo"
                      className="mb-3"
                    >
                      <Form.Select
                        value={sexoSuspeito}
                        onChange={changeSexoSuspeito}
                        aria-label="Floating label select example"
                      >
                        <option></option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <FloatingLabel
                      className="mb-3"
                      controlId="floatingInput"
                      label="Nacionalidade"
                      onChange={changeNacionalidadeSuspeito}
                      value={naciolidadeSuspeito}
                    >
                      <Form.Control placeholder="name" />
                    </FloatingLabel>
                  </Col>

                  <Col md={4}>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Classificação"
                      className="mb-3"
                    >
                      <Form.Select
                        value={classificacao}
                        onChange={changeClassificacao}
                        aria-label="Floating label select example"
                      >
                        <option></option>
                        <option value="A" className="">
                          Amarelo
                        </option>
                        <option value="B" className="">
                          Vermelho
                        </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col md={4}>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Departamento"
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
                </Row>

                <Row>
                  <div className="button-grid">
                    <Button className="btn-suspeito" onClick={handleCadastro}>
                      Cadastrar
                    </Button>
                    <Button className="btn-suspeito" onClick={handleCadastro}>
                      Limpar
                    </Button>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cadastro
