import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../components/Empleos/CardEmpleos.module.css'
import { Link } from 'react-router-dom';


export default function CardEmpleosGuardados() {

    const [empleoGuardado, setEmpleoGuardado] = useState([]);

    useEffect(() => {
        setEmpleoGuardado(JSON.parse(localStorage.getItem('jobsSave')));
    }, []) 
    return (
    <>
    {empleoGuardado === [] || empleoGuardado === null?
    <h1 style={{color:'black'}}>No hay empleos guardados</h1>:
    empleoGuardado.map(empleo => (
        <Card elevation={24} key={empleo.id} sx={{
            maxWidth: 345,
            margin: '5%',
        }}>
            <CardHeader
                title={empleo.title}
                subheader={empleo.location.province}
            />
            <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/200"
                alt=""
            />
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    {empleo.description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                backgroundColor: '#e5e5e5',
                padding: '15px'
            }}>

                <Link to={'/empleos/empleoDetail/' + empleo._id}>
                    <Button sx={{
                        backgroundColor: 'rgb(255, 154, 6)',
                        border: 'solid 2px rgb(255, 154, 6)',
                        margin: '10px',
                        color: 'white'
                    }} id={styles.botonAplicar} size="small">Ver Empleo</Button>
                </Link>
            </CardActions>
        </Card>
    ))
    }
    </>

        
    )
}
