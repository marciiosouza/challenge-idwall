import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import "./ListaSuspeitos.css"
import { useListaSuspeitoContext } from "../../../contexts/ListaSuspeitoContext";

export const ListaSuspeitos = () => {
  const [erro, setErro] = useState(null);
  // const [suspeitos, setSuspeitos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Comece com a página 1
  const itemsPerPage = 5; // Número de itens por página
  const { resultadosPesquisa, setResultadosPesquisa, fetchSuspeitos, erro:erroctx } = useListaSuspeitoContext()

  const handleDeleteSuspeito = async (id, index) => {
    
    try {
      console.log(id)
      const response = await fetch(`https://localhost:7213/Suspeito/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Atualize o estado excluindo o suspeito pelo índice
        const updatedSuspeitos = [...resultadosPesquisa];
        updatedSuspeitos.splice(index, 1);
        setResultadosPesquisa(updatedSuspeitos);
      } else {
        setErro("Erro ao excluir o suspeito.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição à API:", error);
      setErro("Tente novamente mais tarde.");
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // const fetchSuspeitos = async () => {
    //   try {
    //     const response = await fetch("https://localhost:7213/Suspeito", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     if (response.ok) {
    //       const data = await response.json();
    //       setResultadosPesquisa(data);
    //       console.log(data);
    //       console.log("API");
    //     } else {
    //       setErro("Erro na resposta da API.");
    //     }
    //   } catch (error) {
    //     console.error("Erro ao fazer a requisição à API:", error);
    //     setErro("Tente novamente mais tarde.");
    //   }
    // };

    fetchSuspeitos();
  }, []);

  const totalPages = Math.ceil(resultadosPesquisa?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageSuspeitos = resultadosPesquisa.slice(startIndex, endIndex);

  return (
    <section>
      <div className="container">
        <div className="tabela-suspeitos">
          <Table responsive="sm" striped hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sexo</th>
                <th>Nacionalidade</th>
                <th>Departamento</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {currentPageSuspeitos.length > 0 ? (
                currentPageSuspeitos.map((suspeito, index) => (
                  <tr key={suspeito.uid} className="custom-table">
                    <td>{suspeito.title}</td>
                    <td>{suspeito.sex}</td>
                    <td>{suspeito.nationality}</td>
                    <td>{suspeito.departamento}</td>
                    <td>{suspeito.status}</td>
                    <td>
                      <Button
                        className="login"
                        onClick={() =>
                          handleDeleteSuspeito(suspeito.uid, index)
                        }
                      >
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">Não há suspeitos a serem exibidos.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        <div className="pagination-container">
          <Pagination className="justify-content-center">
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />

            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
                className="custom-pagination-item"
              >
                {index + 1}
              </Pagination.Item>
            ))}

            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default ListaSuspeitos;