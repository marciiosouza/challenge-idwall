import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { PageLayout } from "../pages/PageLayout";
import Cadastro from "../pages/Cadastro/Cadastro";
import FormSenha, { ResetSenha } from "../pages/ResetSenha/ResetSenha";
import Banner from "../components/Banner/Banner";
import Formulario from "../components/Formulario/Formulario";


export function Routers() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={
          <PageLayout />
        }>
          <Route path='/' element={<Home />} />
          
        </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/recuperar-senha' element={<ResetSenha />} />
          <Route path='/suspeitos' element={<Banner />} />
          <Route path='/formulario' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  )
}