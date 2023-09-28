import React, { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import './Suspeitos.css';
import Legenda from "../../components/Legenda/Legenda";

export const Suspeitos = () => {
  const [erro, setErro] = useState(null)
  const [suspeitos, setSuspeitos] = useState([])

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
  }, []) // O segundo argumento é uma matriz de dependências vazia, indicando que este efeito é executado uma vez.

  return (
    <>
      <section className="text-center">
        <div className="banner-5">
          <h2>Lista de suspeitos</h2>
        </div>
        <div className="container">
          <div className="tabela___">
            <Table responsive="sm" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Sexo</th>
                  <th>Nacionalidade</th>
                  <th>Classificação</th>
                  <th>Departamento</th>
                </tr>
              </thead>

              <tbody>
                {suspeitos.map((suspeito, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{suspeito.nome}</td>
                    <td>{suspeito.dataNascimento}</td>
                    <td>{suspeito.sexo}</td>
                    <td>{suspeito.nacionalidade}</td>
                    <td>{suspeito.classificacao}</td>
                    <td>{suspeito.departamento}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section>

      <section id="griid">
        <div className="container">
          <div className="legenda-container">
            <div className="risco-legenda">
              <div className="circle-yellow"></div>
              <p className="text-risco fw-bold">Menor Risco</p>
            </div>
            <div className="risco-legenda">
              <div className="circle-red"></div>
              <p className="text-risco fw-bold">Maior Risco</p>
            </div>
          </div>
          <p className="informacao-legenda">
            As cores acima informa a classificação de risco de cada suspeito.
          </p>
        </div>
      </section>
    </>
  )
}

export default Suspeitos