import './Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import iconSuspeito from '../../assets/images/lista_suspeito.svg';
import iconPessoa from '../../assets/images/pessoa.svg';
import iconClassificacao from '../../assets/images/classificacao.svg';
import iconLocal from '../../assets/images/local.svg';

export const Cards = () => {
  return (
    <section id="cards">
      <div className="container">
        <div className="row">

          <div className="text-center shadow-card col-md-6 col-12 col-xl-3">
            <Card className="m-3">
              <div className="grid-icons">
                <Card.Img src={iconSuspeito} className="icon-card" />
                <Card.Title><span className="fw-bold">Lista Suspeitos</span></Card.Title>
              </div>
              <Card.Body>
                <div className="text-card m-2 ">
                  <Card.Text>
                    É possível exibir uma lista contendo todos os suspeitos através da nossa API.
                  </Card.Text>
                </div>
                <div className="p-3">
                  <Button variant="primary" className="custom-btn-cards">Saiba mais</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="text-center shadow-card col-md-6 col-12 col-xl-3">
            <Card className="m-3">
              <div className="grid-icons">
                <Card.Img src={iconPessoa} className="icon-card" />
                <Card.Title><span className="fw-bold">Busca por nomes</span></Card.Title>
              </div>
              <Card.Body>
                <div className="text-card m-2 ">
                  <Card.Text>
                    Utilize a função de busca para encontrar informações sobre os suspeitos.
                  </Card.Text>
                </div>
                <div className="p-3">
                  <Button variant="primary" className="custom-btn-cards">Saiba mais</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="text-center shadow-card col-md-6 col-12 col-xl-3">
            <Card className="m-3">
              <div className="grid-icons">
                <Card.Img src={iconClassificacao} className="icon-card" />
                <Card.Title><span className="fw-bold">Classificação</span></Card.Title>
              </div>
              <Card.Body>
                <div className="text-card m-2 ">
                  <Card.Text>
                    Realize uma busca de cada suspeito com base na classificação re risco.
                  </Card.Text>
                </div>
                <div className="p-3">
                  <Button variant="primary" className="custom-btn-cards">Saiba mais</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="text-center shadow-card col-md-6 col-12 col-xl-3">
            <Card className="m-3">
              <div className="grid-icons">
                <Card.Img src={iconLocal} className="icon-card" />
                <Card.Title><span className="fw-bold">Localidade</span></Card.Title>
              </div>
              <Card.Body>
                <div className="text-card m-2 ">
                  <Card.Text>
                    Informações de localização externas para enriquecer os resultados das consultas.
                  </Card.Text>
                </div>
                <div className="p-3">
                  <Button variant="primary" className="custom-btn-cards">Saiba mais</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

        



        </div>
      </div>
    </section>
  )
}

export default Cards
