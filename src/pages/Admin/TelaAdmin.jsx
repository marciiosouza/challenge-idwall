import BannerAdm from "../Admin/BannerAdmin/BannerAdm"
import LegendaAdm from "../Admin/LegendaAdmin/LegendaAdm"
import ListaSuspeitos from "./ListaSuspeitos/ListaSuspeitos"
import CadastroSuspeito from "./CadastroSuspeito/CadastroSuspeito"
import { Helmet } from "react-helmet"
import Footer from "../../components/Footer/Footer"
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"

export const TelaAdmin = () => {
  return (
    <>
      <Helmet>
        <title>idwall | Admin</title>
      </Helmet>

      <MenuAdmin />
      <BannerAdm />
      <CadastroSuspeito />
      <ListaSuspeitos />
      
      <LegendaAdm />



      <Footer />
    </>
  )
}

export default TelaAdmin
