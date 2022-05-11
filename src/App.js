import { BrowserRouter, Routes, Route , useParams } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Ingresar from "./pages/Ingresar"
import EmpleosPostulantes from "./components/Empleos/EmpleosPostulantes"
import HomePostulantes from "./components/HomePostulantes"
import MiPerfilPostulantes from "./components/MiPerfil/MiPerfilPostulantes"
import NavbarPostulantes from './components/Navbar/NavbarPostulantes'
import NoticiasPostulantes from "./components/Noticias/NoticiasPostulantes"


function App() {
    const {id} = useParams()
    console.log(id)
    return (
      <>
  {/* RUTA AL ENTRAR A LA PAGINA */}
        <BrowserRouter>
        {(id!=="/" || id!=="/index" || id!=="home")? <NavbarPostulantes/> : <></>}
          <Routes>
            {/* Home */}
            <Route exact path="/" element={<Home/>}/>

      {/* RUTAS P/LOGIN O VER EMPLEOS */}
            {/* Home postulantes */}
            <Route exact path="/home-postulantes" element={<HomePostulantes />}/>
            <Route exact path="/empleos" element={<EmpleosPostulantes />}/>
            <Route exact path="/ingresar" element={<Ingresar />}/>
            <Route exact path="/noticias" element={<NoticiasPostulantes />}/>
            <Route exact path="/mi-perfil" element={<MiPerfilPostulantes />}/>
            </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
