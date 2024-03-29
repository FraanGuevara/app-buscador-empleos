import {useContext,useEffect} from 'react'
import {Routes,Route,useLocation} from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Ingresar from "./pages/Ingresar"
import Postulados from "./pages/Postulados"
import NuevoTrabajo from './pages/NuevoTrabajo'
import JobCreated from "./pages/JobCreated"
import Error from "./pages/Error"
import EmpleosPostulantes from "./components/Empleos/EmpleosPostulantes"
import Postulaciones from "./components/Postulaciones"
import NavBar from './components/navBar'
import EmpleosPostulantesDetail from "./components/Empleos/EmpleosPostulantesDetail"
import EmpleosPostuladosDetail from "./pages/EmpleosPostulados"
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
                <Route exact path="/postulaciones" element={<Postulaciones/>}/>
                <Route exact path="/postulados" element={<Postulados />}/>
                <Route exact path="/postulados/postulantesDetail/:id" element={<EmpleosPostuladosDetail />}/>
                <Route exact path="/trabajar" element={<EmpleosPostulantes />}/>
                <Route exact path="/ofrecer" element={<NuevoTrabajo />}/>
                <Route exact path="/ingresar" element={<Ingresar />}/>
                <Route exact path="/empleos/empleoDetail/:id" element={<EmpleosPostulantesDetail />}/>
                <Route exact path="/trabajar/postular" element={<EmpleosPostulantesDetail />}/>
                <Route exact path="/empleos/empleoDetail/:id" element={<EmpleosPostulantesDetail />}/>
                <Route exact path="/empleos/empleoDetail/:id" element={<EmpleosPostulantesDetail />}/>  
                <Route exact path="/jobCreated" element={<JobCreated />}/>
                <Route exact path="/*" element={<Error/>}/>              
            </Routes>
        </>
    )

}