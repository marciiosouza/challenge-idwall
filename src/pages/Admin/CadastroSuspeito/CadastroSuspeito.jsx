import { useEffect, useState } from "react"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useNavigate } from "react-router-dom"
import { Row, Container, Col } from "react-bootstrap"
import "./CadastroSuspeito.css"
import search from "../../../assets/images/search.svg"
import iconSuspeito from '../../../assets/images/lista_suspeito.svg';
import { useListaSuspeitoContext } from "../../../contexts/ListaSuspeitoContext"

const API = import.meta.env.VITE_API_BASE_URL

export const Cadastro = () => {
  const navigate = useNavigate()

  const [nomeSuspeito, setNomeSuspeito] = useState("")
  const [dataNascimentoSuspeito, setDataNascimentoSuspeito] = useState("")
  const [sexoSuspeito, setSexoSuspeito] = useState("")
  const [classificacao, setClassificacao] = useState("")
  const [nacionalidadeSuspeito, setNacionalidadeSuspeito] = useState("")
  const [show, setShow] = useState(false)
  const { setResultadosPesquisa, fetchSuspeitos } = useListaSuspeitoContext()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCadastro = async () => {
    try {
      const response = await fetch(`${API}/Suspeito`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nomeSuspeito,
          classificacao: classificacao,
          sexo: sexoSuspeito,
          nacionalidade: nacionalidadeSuspeito,
        }),
      })
      if (response.ok) {
        setNomeSuspeito("")
        setDataNascimentoSuspeito("")
        setSexoSuspeito("")
        setClassificacao("")
        setNacionalidadeSuspeito("")
        setShow(false) // Feche o modal
        navigate("/admin") // Redirecione para a página de sucesso
      } else {
        console.error("Erro ao cadastrar o suspeito.")
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição à API:", error)
    }
  }

  
  const handlePesquisaNome = async (nome) => {
    try {
      const response = await fetch(`${API}/Suspeito/nome/${nome}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setResultadosPesquisa(data)
        // Faça algo com os dados retornados, como atualizar o estado ou exibir na tela.
        console.log(data);
      } else {
        console.error("Erro ao fazer a pesquisa por nome.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição à API:", error);
    }
  };

  useEffect(() => {
    if (nomeSuspeito?.length <= 0) {
      fetchSuspeitos();
    }
  }, [nomeSuspeito])


  return (
    <>
     
      <div className="container">
        <h2 className="destaque-adm">
          <img className="icons-adm" src={search} alt="Lupa de Pesquisa" />Pesquisar
        </h2>
      </div>
      
      <section>
        <Container fluid="md">
          <Row>
            <Col xs={6} md={4}>
              <div className="mb-3">
                <FloatingLabel controlId="floatingInput" label="Nome">
                  <Form.Control
                    type="name"
                    placeholder="Nome"
                    value={nomeSuspeito}
                    onChange={(e) => setNomeSuspeito(e.target.value)}
                  />
                </FloatingLabel>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Classificação">
                  <Form.Select
                    value={classificacao}
                    onChange={(e) => setClassificacao(e.target.value)}
                    aria-label="Classificação"
                  >
                    <option></option>
                    <option value="A">Amarelo</option>
                    <option value="B">Vermelho</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Col>

            <Col  md={4} >
              <div className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Departamento">
                  <Form.Select aria-label="Departamento" required>
                    <option></option>
                    <option value="1">FBI</option>
                    <option value="2">Interpol</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="button-grid mb-5">
              <Button className="button-adm" onClick={() => handlePesquisaNome(nomeSuspeito)} >
                Pesquisar
              </Button>
              <Button className="button-adm-cadastro" >
                Cadastrar
              </Button>
            </div>
            <div className="line mb-1"></div>
          </div>
        </div>
      </section>
      

      <div className="container">
        <h2 className="destaque-adm">
          <img className="icons-adm" src={iconSuspeito} alt="Lupa de Pesquisa" />Resultado
        </h2>
      </div>






      {/* MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Suspeito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Nome">
                <Form.Control
                  type="name"
                  placeholder="Nome"
                  value={nomeSuspeito}
                  onChange={(e) => setNomeSuspeito(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel controlId="formDate" label="Data">
                <Form.Control
                  type="date"
                  placeholder="Data"
                  value={dataNascimentoSuspeito}
                  onChange={(e) => setDataNascimentoSuspeito(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Sexo">
                <Form.Select
                  value={sexoSuspeito}
                  onChange={(e) => setSexoSuspeito(e.target.value)}
                  aria-label="Sexo"
                >
                  <option></option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Nacionalidade">
                <Form.Control
                  type="text"
                  placeholder="Nacionalidade"
                  value={nacionalidadeSuspeito}
                  onChange={(e) => setNacionalidadeSuspeito(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Classificação">
                <Form.Select
                  value={classificacao}
                  onChange={(e) => setClassificacao(e.target.value)}
                  aria-label="Classificação"
                >
                  <option></option>
                  <option value="A">Amarelo</option>
                  <option value="B">Vermelho</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Departamento">
                <Form.Select aria-label="Departamento" required>
                  <option></option>
                  <option value="1">FBI</option>
                  <option value="2">Interpol</option>
                </Form.Select>
              </FloatingLabel>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button className="button-adm" onClick={handleClose}>
            Fechar
          </Button>
          <Button className="button-adm" onClick={handleCadastro}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cadastro
