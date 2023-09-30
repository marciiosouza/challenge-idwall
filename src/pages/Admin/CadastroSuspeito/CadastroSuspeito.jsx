import React, { useState } from "react"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useNavigate } from "react-router-dom"

export const Cadastro = () => {
  const navigate = useNavigate()

  const [nomeSuspeito, setNomeSuspeito] = useState("")
  const [dataNascimentoSuspeito, setDataNascimentoSuspeito] = useState("")
  const [sexoSuspeito, setSexoSuspeito] = useState("")
  const [classificacao, setClassificacao] = useState("")
  const [nacionalidadeSuspeito, setNacionalidadeSuspeito] = useState("")
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCadastro = async () => {
    try {
      const response = await fetch("https://localhost:7213/Suspeito", {
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

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cadastrar Suspeitos
      </Button>

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
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary"  onClick={handleCadastro}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cadastro
