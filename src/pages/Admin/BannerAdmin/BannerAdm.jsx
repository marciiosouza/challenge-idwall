import "./BannerAdm.css"

export const BannerAdm = () => {
  return (
    <section id="banner-adm">
      <div className="container text-center custon-banner-adm">
        <h2 className="tittle-suspeito mb-4 fw-bold">Tela do Administrador</h2>
        <p className="paragraph-adm">Aqui você pode visualizar os suspeitos cadastrados vindo diretamente das APIs, INTERPOL e FBI, ou você pode cadastrar um suspeito caso não tenha na lista</p>
      </div>
    </section>

  )
}

export default BannerAdm
