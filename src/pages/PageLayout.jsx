import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";


export const PageLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}

