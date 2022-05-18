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


export default function App() {

    const location = useLocation()
    const context = useContext(authContext)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (token) {
            fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+token
                },
            })
            .then(res => res.json())
            .then(data => {
                if (data.failed) {console.log(data)}
                else {
                    context.setAuth({
                        id:data.user.id,
                        name:data.user.name,
                        logged:true
                    })
                }
            })
            .catch(error => console.log(error))
        }
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
                <Route exact path="/empleos/empleoDetail" element={<EmpleosPostulantesDetail />}/>
            </Routes>
        </>
    )

}