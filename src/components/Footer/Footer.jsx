import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="rodape">
              <div>
                Todos os Direitos Reservados | Challenge FIAP
              </div>

              <div className="copyright">
                Desenvolvido por: <span className="name-rodape">Marcio Souza</span> e <span className="name-rodape">Wagner Morais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
