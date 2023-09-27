import "./Legenda.css"

export const Legenda = () => {
  return (
    <>
    <section>
      <div className="container">
        <div className="legenda-container">
          <div className="risco-legenda">
            <div className="circle-yellow"></div>
            <p className="text-risco fw-bold">Menor Risco</p>
          </div>
          <div className="risco-legenda">
            <div className="circle-red"></div>
            <p className="text-risco fw-bold">Maior Risco</p>
          </div>
        </div>
        <p className="informacao-legenda">As cores acima informa a classificação de risco de cada suspeito.</p>
      </div>
    </section>


    

    </>
  )
}

export default Legenda
