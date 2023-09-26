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
        <div className="row alinhamento">
          <div className="col-lg-2 col-md-12">
            <div className="inner-card">
              <Card>
                <Card.Img variant="top" src={iconSuspeito} className="icon-card" />
                <Card.Body>
                  <Card.Title>Listar Suspeitos</Card.Title>
                  <Card.Text>
                    É possível exibir uma lista contendo todos os suspeitos procurados através da nossa API.
                  </Card.Text>
                  <Button variant="" className="btn-card"><ion-icon name="arrow-forward-outline"></ion-icon>Saiba mais</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="inner-card">
              <Card>
                <Card.Img variant="top" src={iconPessoa} className="icon-card" />
                <Card.Body>
                  <Card.Title>Busca por Nomes</Card.Title>
                  <Card.Text>
                    Utilize a função de busca para encontrar informações sobre os suspeitos por meio de seus nomes.
                  </Card.Text>
                  <Button variant="" className="btn-card"><ion-icon name="arrow-forward-outline"></ion-icon>Saiba mais</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="inner-card">
              <Card>
                <Card.Img variant="top" src={iconClassificacao} className="icon-card" />
                <Card.Body>
                  <Card.Title>Classificação</Card.Title>
                  <Card.Text>
                    Realize a busca dos suspeitos com base no nível de procurado agravado atribuído a cada um deles.
                  </Card.Text>
                  <Button variant="" className="btn-card"><ion-icon name="arrow-forward-outline"></ion-icon>Saiba mais</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="inner-card">
              <Card>
                <Card.Img variant="top" src={iconLocal} className="icon-card" />
                <Card.Body>
                  <Card.Title>Localidade</Card.Title>
                  <Card.Text>
                    Informações de localização externas para enriquecer os resultados das consultas.
                  </Card.Text>
                  <Button variant="" className="btn-card">
                    <ion-icon name="arrow-forward-outline">
                    </ion-icon>Saiba mais</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
