import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import EmpleosPostulantes from "./components/postulantes/Empleos/EmpleosPostulantes";
import HomePostulantes from "./components/postulantes/HomePostulantes";
import MiPerfilPostulantes from "./components/postulantes/MiPerfil/MiPerfilPostulantes";
import NavbarPostulantes from './components/postulantes/Navbar/NavbarPostulantes'
import NoticiasPostulantes from "./components/postulantes/Noticias/NoticiasPostulantes";
function App() {
  return (
    <>
{/* RUTA AL ENTRAR A LA PAGINA */}
      <BrowserRouter>
      <NavbarPostulantes/>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home/>}/>

    {/* RUTAS P/LOGIN O VER EMPLEOS */}
          {/* Home postulantes */}
          <Route exact path="/home-postulantes" element={<HomePostulantes />}/>
          <Route exact path="/empleos" element={<EmpleosPostulantes />}/>
          <Route exact path="/noticias" element={<NoticiasPostulantes />}/>
          <Route exact path="/mi%20perfil" element={<MiPerfilPostulantes />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
