import {Link as LinkRouter} from "react-router-dom"

import Typography from '@mui/material/Typography'

import '../App.css'

export default function JobCreated() {
    return (
        <div className='home'>
            <div className='home-img' />
            <div className='home-logo'>
                <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    fontFamily: 'Macondo'}}>
                    Job creado!
                </Typography> 
                <LinkRouter to={'/'}>
                    <Typography variant="h5" className='macondo' sx={{
                        display:'flex',
                        alignItems:'flex-end',
                        justifyContent:'center',
                        fontFamily: 'Macondo'}}>
                        inicio!
                    </Typography> 
                </LinkRouter>
            </div>
        </div>
    )
}
