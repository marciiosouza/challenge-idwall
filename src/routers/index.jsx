import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { PageLayout } from "../pages/PageLayout";

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
      </Routes>
    </BrowserRouter>
  )
}