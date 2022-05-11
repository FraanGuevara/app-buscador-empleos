import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AppPostulantes from "./components/postulantes/AppPostulantes";
import HomePostulantes from "./components/postulantes/HomePostulantes";

function App() {
  return (
    <>
{/* RUTA AL ENTRAR A LA PAGINA */}
      <BrowserRouter>
        <Routes>
          
          {/* Home */}
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

{/* RUTAS P/LOGIN O VER EMPLEOS */}
      <BrowserRouter>
        <Routes>
          {/* Home postulantes */}
          <Route exact path="/app-postulantes" element={<AppPostulantes />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
