import React, { useEffect, useState } from 'react'
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
                maxWidth: 345,
                minHeight: 550,
                maxHeight: 550,
                margin: '5%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white'
            }}>
                <CardHeader sx={{
                    marginTop: '0px',
                    minHeight: '115px',
                    backgroundColor: 'rgb(0, 105, 192);',
                }}
                    title={empleo.title}
                    subheader={empleo.location.province}
                />
                <CardMedia
                    component="img"
                    height="200"
                    image="https://previews.123rf.com/images/veronawinner/veronawinner1801/veronawinner180100033/93792869-icono-de-lupa-signo-de-búsqueda-de-documentos.jpg"
                    alt=""
                />
                <CardContent
                    sx={{
                        textAlign: 'center',
                        minHeight: 150,
                        maxHeight: 150,
                        marginBottom: '0px',
                    }}
                >
                    <Typography variant="body2" color="text.primary">
                        {empleo.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    backgroundColor: '#e5e5e5',
                    padding: '15px',
                    marginTop: '0px'
                }}>

                    <Link to={'/empleos/empleoDetail/' + empleo._id}>
                        <Button sx={{
                            backgroundColor: 'rgb(255, 154, 6)',
                            border: 'solid 2px rgb(255, 154, 6)',
                            margin: '10px',
                            color: 'white',
                        }} id={styles.botonAplicar} size="small">Ver Empleo</Button>
                    </Link>
                </CardActions>
            </Card>
        ))

    );
}
