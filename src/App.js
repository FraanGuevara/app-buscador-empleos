import {useContext,useEffect} from 'react'
import {Routes,Route,useLocation} from "react-router-dom"

import "./App.css"

import Home from "./pages/Home"
import Ingresar from "./pages/Ingresar"
import Error from "./pages/Error"
import NuevoTrabajo from './pages/NuevoTrabajo'
import EmpleosPostulantes from "./components/Empleos/EmpleosPostulantes"
import HomePostulantes from "./components/HomePostulantes"
import MiPerfilPostulantes from "./components/MiPerfil/MiPerfilPostulantes"
import NavBar from './components/navBar'
import EmpleosPostulantesDetail from "./components/Empleos/EmpleosPostulantesDetail"
import {authContext} from './context/AuthContext'
import {postJwt} from './api'


export default function App() {

    const location = useLocation()
    const context = useContext(authContext)

    useEffect(() => {
        postJwt("auth/validate")
        .then(({data}) => {
            if (data.failed) {console.log(data)}
            else {
                context.setAuth({
                    id:data.user.id,
                    name:data.user.name,
                    logged:true
                })
            }
        })
    },[])

    return (
        <>
            {location.pathname === "/" ? <></> : location.pathname === "/inicio" ? <></> : <NavBar />}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/inicio" element={<Home/>}/>
                <Route exact path="/postulaciones" element={<HomePostulantes />}/>
                <Route exact path="/trabajar" element={<EmpleosPostulantes />}/>
                <Route exact path="/ofrecer" element={<NuevoTrabajo />}/>
                <Route exact path="/ingresar" element={<Ingresar />}/>
                <Route exact path="/perfil" element={<MiPerfilPostulantes />}/>
                <Route exact path="/*" element={<Error/>}/>
                <Route exact path="/empleos/empleoDetail/:id" element={<EmpleosPostulantesDetail />}/>
            </Routes>
        </>
    )

}