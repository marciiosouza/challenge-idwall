import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import { PageLayout } from "../pages/PageLayout";



export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PageLayout />
        }>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}