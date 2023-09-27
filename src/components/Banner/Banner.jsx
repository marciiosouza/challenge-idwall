import Legenda from "../Legenda/Legenda"
import "./Banner.css"

export const Banner = () => {
  return (
    <>
      <section id="banner-suspeitos">
        <div className="container">
          <div className="grid">
            <h2 className="tittle-suspeito">Lista de Suspeitos</h2>
          </div>
        </div>
      </section>

      <main>
        <Legenda />
      </main>
    </>
  )
}

export default Banner
