import "./BannerAdm.css"
import suspeito from "../../../assets/images/como-03.svg"

export const BannerAdm = () => {
  return (
    <section id="banner-adm">
      <div className="grid-menu-adm">
        <div className="container">
          <h2 className="tittle-suspeito">Seja Bem vinda a tela de cadastro</h2>
        </div>
        <div>
          <img src={suspeito} alt="" />
        </div>
      </div>
    </section>
    
  )
}

export default BannerAdm
