import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import logoNav from "../../assets/images/logo-idwall.svg"
import "./MenuAdmin.css"

export const MenuAdmin = () => {
  const navigate = useNavigate()
  const [nomeUsuario, setNomeUsuario] = useState("Marcio")
  const [saudacao, setSaudacao] = useState("Olá")

  const handleLogout = () => {
    // Limpar os dados de autenticação (exemplo: remover token, limpar cookies, etc.)

    // Redirecionar para a página de login ("/login" neste exemplo)
    navigate("/login")
  }

  const handleLogin = (novoNomeUsuario) => {
    // Atualizar o nome do usuário quando o usuário faz login
    setNomeUsuario(novoNomeUsuario)
  }

  useEffect(() => {
    // Obter a hora atual
    const agora = new Date()
    const hora = agora.getHours()

    // Definir a saudação com base na hora do dia
    if (hora >= 0 && hora < 12) {
      setSaudacao("Bom dia")
    } else if (hora >= 12 && hora < 18) {
      setSaudacao("Boa tarde")
    } else {
      setSaudacao("Boa noite")
    }
  }, []) // O segundo argumento é uma matriz de dependências vazia para que este efeito seja executado uma vez

  return (
    <Navbar className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoNav} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ marginRight: "15px" }}>
            
            <span className="custom-menu"> Olá&nbsp;{saudacao} </span> <span className="custom-menu-adm"> {nomeUsuario}
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
        <Button variant="" className="btn-admin" onClick={handleLogout}>
          Sair
        </Button>
      </Container>
    </Navbar>
  )
}

export default MenuAdmin
