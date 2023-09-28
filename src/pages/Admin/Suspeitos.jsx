import "./Suspeitos.css"
import Table from "react-bootstrap/Table"

export const Suspeitos = () => {
  return (
    <>
      <section>
        <div className="container">
          <Table responsive="sm">
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
              <tr id="bg__risco">
                <td>1</td>
                <td>Wagner Morais</td>
                <td>27/01/1995</td>
                <td>Masculino</td>
                <td>Brasileiro</td>
                <td>Vermelha</td>
                <td>FBI</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  )
}

export default Suspeitos
