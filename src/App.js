import {useContext,useEffect} from 'react'
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
            {location.pathname !== "/" ? <NavbarPostulantes/> : <></>}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home-postulantes" element={<HomePostulantes />}/>
                <Route exact path="/empleos" element={<EmpleosPostulantes />}/>
                <Route exact path="/ingresar" element={<Ingresar />}/>
                <Route exact path="/mi%20perfil" element={<MiPerfilPostulantes />}/>
                <Route exact path="/*" element={<Error/>}/>
                <Route exact path="/empleos/empleoDetail/:id" element={<EmpleosPostulantesDetail />}/>
            </Routes>
        </>
    )

}