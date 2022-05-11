import React, {useState} from 'react'

import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import Typography from '@mui/material/Typography'
import GoogleIcon from '@mui/icons-material/Google'

import {Link as LinkRouter} from "react-router-dom"

import '../App.css'

export default function Ingresar(props) {

    const [register,setRegister] = useState(false)
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")
    
    const handleRegister = (event) => {
        setRegister(!register)
    }

/*     const handleSubmit = (event) => { //funcion necesaria para pasar los datos al back, chequear cuando tengamos la API
        event.preventDefault() //prevenimos la accion del submit
        const userLogin = {
            email: mail,
			password: pass,
			from: "LogInForm"
		}
        props.logInUser(userLogin)
    }
 */
    return (
        <div className='home'>
            <div className='home-img' />
            <div className='home-ingreso'>
                <Typography variant="h1" sx={{fontFamily: 'Macondo', padding: '10px', color: 'white'}}>Bienvenido!</Typography>
                {/* <form onSubmit={handleSubmit}> */}
                <form className='w100'>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
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
                        <input type='email' name='email' id='email' placeholder='e-mail' className='myInput' value={mail} onChange={e=>setMail(e.target.value)} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
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
                        <input type='password' name='password' id='password' placeholder='contraseña' className='myInput' value={pass} onChange={e=>setPass(e.target.value)} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '60%',
                        minWidth: '280px',
                        height: '50px',
                        borderRadius: '50px',
                        marginTop: '20px'}}>
                        {/* <GoogleSignIn /> */}
                        <input type="submit" value='ingreso' className='myButton' required />
                        <GoogleIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '50px',
                                height: '50px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                '&:hover': {bgcolor: 'rgb(19, 127, 217)'},
                                border: '0px solid rgb(0, 105, 192)',
                                borderRadius: '50px',
                                padding: '10px'}}/>
                        <div className='myButtonDiv'>registro</div>
                    </Box>
                </form>
            </div>
        </div>
    )
}
