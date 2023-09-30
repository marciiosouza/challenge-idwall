import Button from 'react-bootstrap/Button';
import '../../assets/css/style.css';
import Cards from '../../components/Cards/Cards';
import ImgNotbook from '../../assets/images/ilustra-sys.png';
import ImgPhone from '../../assets/images/simetry-phone.svg';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll'; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Element name="home"> 
        <section id="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 col-lg-6 mb-md-5 mb-5">
                <h2 className="tittle-home">Plataforma de <br /> Gerenciamento de Consultas</h2>
                <p className="descricao-home">O objetivo principal deste sistema é fornecer uma solução eficiente e intuitiva para o gerenciamento das pessoas procuradas pelo FBI e Interpol. Por meio da integração com as APIs do FBI e Interpol, poderemos obter informações atualizadas sobre os suspeitos e facilitar o trabalho das forças policiais na localização e captura desses indivíduos.</p>
                <Button variant="" className="button-home" onClick={() => navigate("/login")}>Saiba mais sobre nossa solução!</Button>
              </div>

              <div className="col-md-12 col-sm-12 col-12 col-lg-6 text-center">
                <img id="notbook-banner" src={ImgNotbook} alt="Notebook exibindo uma imagem de um sistema de cadastro." />
              </div>
            </div>
          </div>
        </section>
      </Element>
      <main className="mb-5">
        <Element name="servicos"> 
          <section>
            <h2 className="destaque-home">Serviços</h2>
            <Cards />
          </section>
        </Element>
        <Element name="sobre-o-projeto"> 
          <section>
            <h2 className="destaque-home">Sobre o Projeto</h2>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6 mb-5 text-center">
                  <img id="notbook-banner" src={ImgPhone} alt="Notebook exibindo uma imagem de um sistema de cadastro." />
                </div>
                <div className="col-md-12 col-lg-6">
                  <p className="paragraph-home">Este projeto tem como objetivo desenvolver um sistema para gerenciar as pessoas mais procuradas pelo FBI e Interpol, utilizando uma API REST para obter os dados das respectivas organizações.</p>
                  <p className="paragraph-home">O objetivo principal deste sistema é fornecer uma solução eficiente e intuitiva para o gerenciamento das pessoas procuradas pelo FBI e Interpol. Por meio da integração com as APIs do FBI e Interpol, poderemos obter informações atualizadas sobre os suspeitos e facilitar o trabalho das forças policiais na localização e captura desses indivíduos.</p>

                  <a
                    className="button-repository mb-5"
                    href="https://github.com/marciiosouza/Challenge_Idwall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="logo-github" id="icons"></ion-icon> Repositório no Github
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Element>
      </main>
    </>
  );
}
