import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './NavbarPostulantes.module.css';



const pages = ['empleos', 'noticias', 'mi perfil'];

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <>
            <div style={{ backgroundColor: 'black', overflow: 'hidden', textOverflow: 'clip' }}>
            </div>
            <AppBar id={styles.navbarAllproducts} position="relative" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* ----------------------------------------------------------- */}
                        <Box sx={{
                            flexGrow: 1, display: { xs: 'flex', md: 'none' }
                        }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Menu
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <div id={styles.menuNavbar}>

                                    {/* Boton HOME MOBILE */}
                                    <Link id={styles.botonesLink} to='/home-postulantes'>
                                        <Button id={styles.botonesStyle} variant="contained" key='Home' onClick={handleCloseNavMenu}>
                                            Home
                                        </Button>
                                    </Link>

                                    {/* Botones Empleos / noticias / mi perfil MOBILE */}
                                    {pages.map((page) => (
                                        <Link id={styles.botonesLink} to={'/category/' + page}>
                                            <Button id={styles.botonesStyle} variant="contained" key={page} onClick={handleCloseNavMenu}>
                                                {page}
                                            </Button>
                                        </Link>
                                    ))}
                                </div>
                            </Menu>
                        </Box>
                        {/* LOGO RESPONSIVE MOBILE */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Rosario Jobs !{/* Logo */}
                        </Typography>


                        {/* WEB----------------------------------------------------------- */}
                        {/* lOGO WEB  */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Rosario Jobs !{/* Logo */}
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* Boton HOME WEB */}
                            <Link id={styles.botonesLink} to='/home-postulantes'>
                                <Button
                                    key='Home'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    Home
                                </Button>
                            </Link>
                            {/* Botones CATEGORIAS WEB*/}
                            {pages.map((page) => (
                                /* Link para que a cada "page" se le asigne el link de router con su mismo nombre */
                                <Link id={styles.botonesLink} to={'/' + page}>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    );
};
