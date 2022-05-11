import React from 'react'
import '../App.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'

export default function Home() {
    return (
        <div className='home'>
            <div className='home-img' />
            <div className='home-logo'>
                <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    fontFamily: 'Macondo'}}>
                    RosarioJobs!
                </Typography> 
                <Typography variant="h4" sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'}}>
                    gente que busca gente
                </Typography>
                <div style={{
                    display:'flex',
                    alignItems:'start',
                    justifyContent: 'center'}}>
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
                                display:'flex',
                                alignItems:'flex-end',
                                justifyContent:'center',
                                fontFamily: 'Macondo'}}>
                                trabajar!
                            </Typography> 
                    </Box>
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
                                display:'flex',
                                alignItems:'flex-end',
                                justifyContent:'center',
                                fontFamily: 'Macondo'}}>
                                ingresar!
                            </Typography> 
                    </Box>
                </div>
            </div>
        </div>
    )
}
