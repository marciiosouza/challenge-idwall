import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="rodape">
          <div>
            Todos os Direitos Reservados | Challenge FIAP
          </div>
         
          <div>
            <div className="links-rodape">
              <ion-icon
                className="icon-github"
                name="logo-github"
                id="social"
              ></ion-icon>
            <a
              href="https://github.com/marciiosouza/Challenge_Idwall"
              target="_blank"
              rel="noopener noreferrer"
              className="link-repo"
            >
              Repositótio
            </a>
            </div>
          </div>

          <div className="copyright">
            Desenvolvido por: Marcio e Wagner Morais
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
{
  /* <h6 >Todos os direitos reservados 2023 | Challenge - FIAP</h6>
          <a href="">
            <h6 className=""><ion-icon name="logo-github" id="social"></ion-icon>Repositótio</h6>
          </a>
        </div>
        <h6>Desenvolvido por: <a href="http://" target="_blank" rel="noopener noreferrer">Marcio Souza</a> & <a href="http://Wagner Morais" target="_blank" rel="noopener noreferrer">Wagner Morais</a></h6> */
}
