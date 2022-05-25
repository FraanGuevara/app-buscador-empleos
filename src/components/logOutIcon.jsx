import React, {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LogoutIcon from '@mui/icons-material/Logout';

import {authContext} from '../context/AuthContext'

export default function MyLogOutIcon() {

    const context = useContext(authContext)

    const handleLogOut=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        context.setAuth({
            logged:false,
            name:"",
            id:""
        })
    }
    return (
        <a href="./">
        <Box onClick={handleLogOut} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px 0 20px'}}>
                <LogoutIcon sx={{
                    color:'rgb(0, 105, 192)',
                    '&:hover': {color: 'white', bgcolor: 'rgb(255, 154, 62)'},
                    backgroundColor: 'white',
                    width: '40px',
                    height: '40px',
                    padding: '5px',
                    borderRadius: '30px'}} />
                <Typography variant="h5" className='macondo' sx={{
                    color: 'white',
                    display:'flex',
                    alignItems:'flex-end',
                    justifyContent:'center',
                    fontFamily: 'Macondo'}}>
                    salir!
                </Typography> 
        </Box>
    </a>
    )

}
