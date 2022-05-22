import React, {useState,useContext,useRef} from 'react'

import {authContext} from '../context/AuthContext'

import Box from '@mui/material/Box'
import PersonIcon from '@mui/icons-material/Person'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Typography from '@mui/material/Typography'

import '../App.css'
import {post} from '../api'
import {useNavigate} from 'react-router-dom'

export default function Ingresar(props) {

    const [register,setRegister] = useState(false)
    const context = useContext(authContext)
    const mail = useRef()
    const pass = useRef()
    const name = useRef()
    const role = useRef()
    const navigate = useNavigate()
    
    const handleRegister = (event) => {
        event.preventDefault()
        setRegister(!register)
    }

    const handleSignin = (event) => {
        event.preventDefault()
        post("auth/login" ,{
            email: mail.current.value,
            password: pass.current.value
        })
        .then(data => {
            const {token,user} = data.data
            localStorage.setItem("token",token)
            localStorage.setItem("role",user.role)
            context.setAuth({
                id:user.id,
                name:user.name,
                logged:true
            })
            navigate("/",{
                replace:true
            })
        })
    }

    const handleSignup = (event) => {
        event.preventDefault()
        post("auth/signup" ,{
            name:name.current.value,
            email: mail.current.value,
            password:pass.current.value,
            role:role.current.value
        })
        .then(({data}) => {
            if (data.error) {
                console.log(data)
            } else {
                localStorage.setItem("token",data.token)
                localStorage.setItem("role",data.user.role)
                context.setAuth({
                    id:data.user.id,
                    name:data.user.name,
                    logged:true
                })
            }
            navigate("/",{
                replace:true
            })
        })
    }

    return (
        <div className='login'>
            <div className='login-color'>
                <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Macondo',
                    padding: '10px',
                    margin: '10px',
                    color: 'white',
                    width: '40%',
                    minWidth: '280px',
                    backgroundColor: 'rgba(0, 105, 192, 0.8)',
                    borderRadius: '50px'}}>
                    Bienvenido!
                </Typography>
                {register ? (
                    <form onSubmit={handleSignup} className='w100'>
                        <Box sx={{
                            display: 'flex',
                            width: '40%',
                            minWidth: '280px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px'}}>
                            <label htmlFor="name">
                                <PersonIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='text' name='name' id='name' placeholder='nombre' className='myInput' ref={name} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            width: '40%',
                            minWidth: '280px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="email">
                                <MailIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='email' name='email' id='email' placeholder='e-mail' className='myInput' ref={mail} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            width: '40%',
                            minWidth: '280px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="password">
                                <KeyIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='password' name='password' id='password' placeholder='contraseña' className='myInput' ref={pass} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            width: '40%',
                            minWidth: '280px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="role">
                                <SupervisorAccountIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <select id="role" name="role" className='myInput' ref={role}>
                                <option value="applicant">postulante</option>
                                <option value="employer">empleador</option>
                            </select>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '40%',
                            minWidth: '280px',
                            height: '50px',
                            borderRadius: '50px',
                            marginTop: '20px'}}>
                            <input type="submit" value='registrar!' className='myButton' required />
                            <div className='myButtonDiv' onClick={handleRegister}>ingresar</div>
                        </Box>
                    </form>
                ) : (
                    <form onSubmit={handleSignin} className='w100'>
                        <Box sx={{
                            display: 'flex',
                            width: '40%',
                            minWidth: '280px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px'}}>
                            <label htmlFor="email">
                                <MailIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='email' name='email' id='email' placeholder='e-mail' className='myInput' ref={mail} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            width: '40%',
                            minWidth: '280px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="password">
                                <KeyIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='password' name='password' id='password' placeholder='contraseña' className='myInput' ref={pass} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '40%',
                            minWidth: '280px',
                            height: '50px',
                            borderRadius: '50px',
                            marginTop: '20px'}}>
                            <input type="submit" value='ingresar!' className='myButton' required />
                            <div className='myButtonDiv' onClick={handleRegister}>registrar</div>
                        </Box>
                    </form>
                )}
        </div>
    </div>
    )

}


/* 
c3@c3.com.ar     Hola1234     empleador
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ29uc3RydWNjaW9uZXMgMyIsImVtYWlsIjoiYzNAYzMuY29tLmFyIiwicm9sZSI6ImVtcGxveWVyIiwiaWQiOiI2MjgzZGM0NmFlYWE4N2QzMmM3ZDM5ZTYiLCJpYXQiOjE2NTI4MDg3NzQsImV4cCI6MTY1MzQxMzU3NH0.Xn5wUP79tBDJEbmebYg_Zhrj7wzmD-AoONqZGMQQJj8

jime.rodriguez@gmail.com     Hola1234     trabajador
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltZW5hIiwiZW1haWwiOiJqaW1lLnJvZHJpZ3VlekBnbWFpbC5jb20iLCJyb2xlIjoiYXBwbGljYW50IiwiaWQiOiI2MjgzZTNjYjlmNDBmODYxMTg4MjIwMWQiLCJpYXQiOjE2NTI4MTA2OTksImV4cCI6MTY1MzQxNTQ5OX0.uz4N6OGi94UM0-edaPiyi6AnorCjquc0c6g1nz7k9HA
*/