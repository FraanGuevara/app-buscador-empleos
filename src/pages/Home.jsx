import {Link as LinkRouter} from "react-router-dom"

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'

import '../App.css'
import MyLogOutIcon from "../components/logOutIcon"

export default function Home() {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    return (
        <div className='home'>
            <div className='home-img' />
            <div className='home-logo'>
                <Typography variant="h2" sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    fontFamily: 'Macondo'}}>
                    RosarioJobs!
                </Typography> 
                <Typography variant="h4" sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    fontFamily: 'Radio Canada'}}>
                    gente que busca gente
                </Typography>
                <div style={{
                    display:'flex',
                    alignItems:'start',
                    justifyContent: 'center'}}>
                    {token? (role==="applicant"? (
                        <>
                        <LinkRouter to={'/trabajar'}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '40px 20px 0 20px'}}>
                                    <HomeIcon sx={{
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
                                        trabajar!
                                    </Typography> 
                            </Box>
                        </LinkRouter>
                        <LinkRouter to={'/postulaciones'}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '40px 20px 0 20px'}}>
                                    <PersonIcon sx={{
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
                                        postulados!
                                    </Typography> 
                            </Box>
                        </LinkRouter>
                        <MyLogOutIcon />
                    </>
                    ) : (
                        <>
                        <LinkRouter to={'/ofrecer'}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '40px 20px 0 20px'}}>
                                    <HomeIcon sx={{
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
                                        ofrecer!
                                    </Typography> 
                            </Box>
                        </LinkRouter>
                        <LinkRouter to={'/postulados'}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '40px 20px 0 20px'}}>
                                    <PersonIcon sx={{
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
                                        postulados!
                                    </Typography> 
                            </Box>
                        </LinkRouter>
                        <MyLogOutIcon />
                    </>
                    )) : (
                    <LinkRouter to={'/ingresar'}>
                        <Box sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px 20px 0 20px'}}>
                                <PersonIcon sx={{
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
                                    ingresar!
                                </Typography> 
                        </Box>
                    </LinkRouter>
                    )}
                </div>
            </div>
        </div>
    )
}
