import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../components/Empleos/CardEmpleos.module.css'
import { Link } from 'react-router-dom';

export default function CardPostulaciones({ postulacion }) {

    return (
        <>
            {postulacion.error === true ?
                <h1 style={{ backgroundColor: 'red', height: '500px', marginTop: '200px' }}>No hay postulaciones</h1>
                :
                postulacion.map(postulacion => (

                    <Card elevation={24} key={postulacion.id} sx={{
                        maxWidth: 345,
                        minWidth: 345,
                        minHeight: 550,
                        maxHeight: 550,
                        margin: '5%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        color: 'white'
                    }}>
                        <CardHeader
                            sx={{
                                marginTop: '0px',
                                minHeight: '115px',
                                backgroundColor: 'rgb(0, 105, 192);',
                            }}
                            title={postulacion.title}
                            subheader={postulacion.location.province}

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
                            <Typography variant="body1" color="text.primary">
                                {postulacion.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            backgroundColor: '#e5e5e5',
                            padding: '15px',
                            marginTop: '0px'
                        }}>

                            <Link to={'/empleos/empleoDetail/' + postulacion._id}>
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
            }
        </>


    );
}