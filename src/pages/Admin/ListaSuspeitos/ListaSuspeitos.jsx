import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

export const ListaSuspeitos = () => {
  const [erro, setErro] = useState(null)
  const [suspeitos, setSuspeitos] = useState([])

  const handleDeleteSuspeito = async (id, index) => {
    try {
      const response = await fetch(`https://localhost:7213/Suspeito/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        // Atualize o estado excluindo o suspeito pelo índice
        const updatedSuspeitos = [...suspeitos]
        updatedSuspeitos.splice(index, 1)
        setSuspeitos(updatedSuspeitos)
      } else {
        setErro("Erro ao excluir o suspeito.")
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição à API:", error)
      setErro("Tente novamente mais tarde.")
    }
  }

  useEffect(() => {
    const fetchSuspeitos = async () => {
      try {
        const response = await fetch("https://localhost:7213/Suspeito", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.ok) {
          const data = await response.json()
          setSuspeitos(data)
          console.log(data)
          console.log("API")
        } else {
          setErro("Erro na resposta da API.")
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição à API:", error)
        setErro("Tente novamente mais tarde.")
      }
    }

    fetchSuspeitos()
  }, [])

  return (
    <section className="text-center">
      <div className="container">
        <div className="tabela-suspeitos">
          <Table responsive="sm" striped hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>Sexo</th>
                <th>Nacionalidade</th>
                <th>Classificação</th>
                <th>Departamento</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {suspeitos.length > 0 ? (
                suspeitos.map((suspeito, index) => (
                  <tr key={suspeito.uid} className="custom-table">
                    <td>{suspeito.title}</td>
                    <td>{suspeito.dataNascimento}</td>
                    <td>{suspeito.sex}</td>
                    <td>{suspeito.nationality}</td>
                    <td>{suspeito.classificacao}</td>
                    <td>{suspeito.departamento}</td>
                    <td>{suspeito.status}</td>
                    <td>
                      <Button
                        className="login"
                        onClick={() =>
                          handleDeleteSuspeito(suspeito.SuspeitoId, index)
                        }
                      >
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">Carregando os vagabundos...</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default ListaSuspeitos
