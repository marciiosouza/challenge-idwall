import Button from 'react-bootstrap/Button';
import '../../assets/css/style.css';
import Cards from '../../components/Cards/Cards';

export default function Home() {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="col-md-12">
            <div className="text-banner">
              <h2 className="tittle-home">Plataforma de Gerenciamento de Consultas</h2>
              <p>O objetivo principal deste sistema é fornecer uma solução eficiente e intuitiva para o gerenciamento das pessoas procuradas pelo FBI e Interpol. Por meio da integração com as APIs do FBI e Interpol, poderemos obter informações atualizadas sobre os suspeitos e facilitar o trabalho das forças policiais na localização e captura desses indivíduos.</p>
              <Button variant="" className="btn-banner mx-auto">Saiba mais sobre nossa solução!</Button>{' '}
            </div>
          </div>
        </div>
      </section>
      <main>
        <Cards />
      </main>
    </>
  )
}