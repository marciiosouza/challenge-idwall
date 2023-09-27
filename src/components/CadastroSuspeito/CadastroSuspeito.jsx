import "./CadastroSuspeito.css"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Helmet } from "react-helmet"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

export const Cadastro = () => {
 
  //Constates para cadastrar suspeito
  const [nomeSuspeito, setNomeSuspeitopain] = useState("")
  const [dataNascimentoSuspeito , setDataNascimentoSuspeito] = useState("")
  const [sexoSuspeito , setSexoSuspeito] = useState("")
  const [ classificacao , setClassificacao] = useState("")
  const[naciolidadeSuspeito , setNacionalidadeSuspeito] = useState("")


  function changeNomeSuspeito(event){
    setNomeSuspeitopain(event.target.value)
  }
  function changedataNascimentoSuspeito(event){
    setDataNascimentoSuspeito(event.target.value)
  }
  function changeSexoSuspeito(event){
    
    setSexoSuspeito(event.target.value)
  }
  function changeClassificacao(event){
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
        body: JSON.stringify(
          { 
            "nome": nomeSuspeito,
            "classificacao" :classificacao,
            "sexo" : sexoSuspeito,
            "nacionalidade" :naciolidadeSuspeito}),
      })
      if (response.ok) {
        console.log('feito') // Redirecione para a página de sucesso
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
                      
                     
                    >
                      <Form.Control  type="name" placeholder="Nome" value={nomeSuspeito} onChange={changeNomeSuspeito} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel
                      controlId="formDate"
                      label="Data"
                      className="mb-3"
                    >
                      <Form.Control  type="date" placeholder="Data" value={dataNascimentoSuspeito} onChange={changedataNascimentoSuspeito} />
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
                      <Form.Select value={sexoSuspeito} onChange={changeSexoSuspeito} aria-label="Floating label select example">
                        <option></option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
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
                      <Form.Select value={classificacao} onChange={changeClassificacao} aria-label="Floating label select example">
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
                </Row>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingInput"
                  label="Nacionalidade"
                  onChange={changeNacionalidadeSuspeito}
                  value={naciolidadeSuspeito}
                >
                  <Form.Control  placeholder="Senha" />
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
