import React from 'react'
import {Link as LinkRouter} from "react-router-dom"
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import LogOutItem from './logOutItem'
import LogOutNav from './logOutNav'

import '../App.css'

const userPages = ['trabajar','postulaciones','salir']
const empPages = ['ofrecer','postulados','salir']
let pages = ['inicio']

export default function NavBar(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const handleOpenNavMenu = (event) => {setAnchorElNav(event.currentTarget)}
    const handleCloseNavMenu = () => {setAnchorElNav(null)}

    const role = localStorage.getItem("role")
    if (role==="employer") {
        pages = empPages
    } else if (role==="applicant") {
        pages = userPages
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="100%" sx={{backgroundColor: 'rgb(233, 121, 26)'}}>
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center'}}>
                    {/* //////////logo////////// */}
                    <Typography variant="h2" noWrap sx={{
                        display: { xs: 'none', md: 'flex'},
                        justifyContent:'center',
                        alignItems:'center',
                        paddingRight: '20px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        color: 'white',
                        fontFamily: 'Macondo'}}>
                        RosarioJobs
                    </Typography>
                    {/* //////////icono de navegacion responsive////////// */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{
                            bgcolor: 'white',
                            color: 'rgb(165, 126, 196)'}}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{vertical: 'bottom',horizontal: 'left'}}
                            keepMounted
                            transformOrigin={{vertical: 'top',horizontal: 'left'}}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: { xs: 'block', md: 'none' }}}>
                            {pages.map((page) => (
                                page!=="salir"? (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <LinkRouter to={'/'+page}>
                                            <Typography sx={{color: 'black',fontFamily: 'Radio Canada'}}>{page}</Typography>
                                        </LinkRouter>
                                    </MenuItem>
                                ) : <LogOutItem page={page} />
                                ))
                            }
                        </Menu>
                    </Box>
                    {/* //////////logo responsive////////// */}
                    <Typography variant="h3" noWrap sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        fontFamily: 'Macondo'}}>
                        RosarioJobs
                    </Typography>
                    {/* //////////barra de navegacion////////// */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page,index) => (
                            page!=="salir"? (
                            <LinkRouter to={'/'+page} key={index} >
                                <Button onClick={handleCloseNavMenu}>
                                    <Typography variant="h6" className='fredokaFont' sx={{display: 'block', color: 'white'}}>{page}</Typography>
                                </Button>
                            </LinkRouter>
                        ) : <LogOutNav page={page} />))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}