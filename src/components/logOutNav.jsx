import React, {useContext} from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import {authContext} from '../context/AuthContext'

export default function LogOutNav({page}) {

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
        <a href="../../" key={page}>
            <Button onClick={handleLogOut}>
                <Typography variant="h6" className='fredokaFont' sx={{display: 'block', color: 'white'}}>{page}</Typography>
            </Button>
        </a>
    )

}
