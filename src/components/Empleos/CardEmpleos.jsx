import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './CardEmpleos.module.css'
import { Link } from 'react-router-dom';
/* import { getJwt } from '../../api' */

export default function CardEmpleos({ empleos, datosDinamicos }) {
    return (empleos &&
        datosDinamicos.map(empleo => (
            <Card elevation={24} key={empleo.id} sx={{
                width: '30vw',
                minWidth: '340px',
                margin: '10px',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
                    <CardHeader title={empleo.title.length>5 ? empleo.title : "Developer"} subheader={empleo.location ? `${empleo.location.country} ${empleo.location.province}` : "Remoto"} sx={{
                        width: '100%',
                        marginTop: '0px',
                        backgroundColor: 'rgb(0, 105, 192);'}} />
                    <CardMedia component="img" image="https://previews.123rf.com/images/veronawinner/veronawinner1801/veronawinner180100033/93792869-icono-de-lupa-signo-de-búsqueda-de-documentos.jpg" alt="" sx={{
                        paddingTop: '0px',
                        marginTop: '0px',
                        textAlign: 'center',
                        width: '170px'}} />
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, margin: '10px', padding: '10px', paddingTop: 0}}>
                        {empleo.category.map(cadaCat => (
                            <Typography variant="body2" color="text.primary" sx={{padding: '10px', margin: '5px', border: 'solid 2px rgb(255, 154, 6)'}}>
                                {cadaCat}
                            </Typography>
                        ))}
                    </Box>
                    <CardActions sx={{
                        backgroundColor: '#e5e5e5',
                        margin: '10px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                        <Link to={'/empleos/empleoDetail/' + empleo._id}>
                            <Button id={styles.botonAplicar} size="small" sx={{
                                backgroundColor: 'rgb(255, 154, 6)',
                                border: 'solid 2px rgb(255, 154, 6)',
                                color: 'white'}}>
                                Ver Empleo
                            </Button>
                        </Link>
                    </CardActions>
            </Card>
        ))

    );
}
