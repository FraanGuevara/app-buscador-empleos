import {Routes,Route,useLocation} from "react-router-dom"

import "./App.css"

import Home from "./pages/Home"
import Ingresar from "./pages/Ingresar"
import Error from "./pages/Error"
import EmpleosPostulantes from "./components/Empleos/EmpleosPostulantes"
import HomePostulantes from "./components/HomePostulantes"
import MiPerfilPostulantes from "./components/MiPerfil/MiPerfilPostulantes"
import NavbarPostulantes from './components/Navbar/NavbarPostulantes'
import EmpleosPostulantesDetail from "./components/Empleos/EmpleosPostulantesDetail"


export default function App() {

    const location = useLocation()

    return (
        <>
            {location.pathname !== "/" ? <NavbarPostulantes/> : <></>}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home-postulantes" element={<HomePostulantes />}/>
                <Route exact path="/empleos" element={<EmpleosPostulantes />}/>
                <Route exact path="/ingresar" element={<Ingresar />}/>
                <Route exact path="/mi%20perfil" element={<MiPerfilPostulantes />}/>
                <Route exact path="/*" element={<Error/>}/>
                <Route exact path="/empleos/empleoDetail" element={<EmpleosPostulantesDetail />}/>
            </Routes>
        </>
    )

}