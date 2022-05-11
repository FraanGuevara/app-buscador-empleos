import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPostulantes from './Navbar/NavbarPostulantes'

export default function AppPostulantes() {
  return (
    <>
        <>
    {/* RUTAS P/LOGIN O VER EMPLEOS */}
      <BrowserRouter>
      <NavbarPostulantes/>
        <Routes>
          {/* Home postulantes */}
          <Route exact path="/home-postulantes" element={<HomePostulantes/>}/>
          </Routes>
      </BrowserRouter>
    </>
        
    </>
  )
}
