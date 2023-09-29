import "./LegendaAdm.css"

export const LegendaAdm = () => {
  return (
    <section>
      <div className="container pb-5">
        <div className="legenda-container">
          <div className="grid-legenda">
            <div className="circle-yellow"></div>
            <p className="text-risco fw-bold">Menor Risco</p>
          </div>

          <div className="grid-legenda">
            <div className="circle-red"></div>
            <p className="text-risco fw-bold">Maior Risco</p>
          </div>
        </div>

        <p className="informacao-legenda">
          As cores acima informa a classificação de risco de cada suspeito.
        </p>
      </div>
    </section>
  )
}

export default LegendaAdm
