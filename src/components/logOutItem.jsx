import React, {useContext} from 'react'

import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import {authContext} from '../context/AuthContext'

export default function LogOutItem({page}) {

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
        <MenuItem key={page} onClick={handleLogOut}>
            <a href="../../" key={page}>
                <Typography className='fredokaFont' sx={{color: 'black'}}>{page}</Typography>
            </a>
        </MenuItem>
    )
}
