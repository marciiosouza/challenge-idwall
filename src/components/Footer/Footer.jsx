import './Footer.css';

export const Footer = () => {
  return (
   <footer>
      <h6 >Todos os direitos reservados 2023 | Challenge - FIAP</h6>
      <div className="mx-auto">
      <a href="">
      <h6 className=""><ion-icon name="logo-github" id="social"></ion-icon>Repositótio</h6>
      </a>
        
      </div>
      <h6>Desenvolvido por: <a href="http://" target="_blank" rel="noopener noreferrer">Marcio Souza</a> & <a href="http://Wagner Morais" target="_blank" rel="noopener noreferrer">Wagner Morais</a></h6>
   </footer>
  )
}

export default Footer