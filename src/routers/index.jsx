import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import { PageLayout } from "../pages/PageLayout"
import Cadastro from "../pages/Cadastro/Cadastro"
import { ResetSenha } from "../pages/ResetSenha/ResetSenha"
import TelaAdmin from "../pages/Admin/TelaAdmin"

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<ResetSenha />} />
        <Route path="/admin" element={<TelaAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}
