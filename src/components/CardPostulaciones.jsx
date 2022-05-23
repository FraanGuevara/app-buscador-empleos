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

export default function CardPostulaciones({postulacion}) {

    return (
        postulacion.map(postulacion =>(
            
        <Card elevation={24} key={postulacion.id} sx={{ 
            maxWidth: 345,
            margin:'5%',
        }}>
            <CardHeader
                title={postulacion.title}
                subheader={postulacion.location.province}
                
                    />
            <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/200"
                alt=""
            />
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    {postulacion.description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                backgroundColor:'#e5e5e5',
                padding:'15px'
            }}>
                
                <Link to={'/empleos/empleoDetail/' + postulacion._id}>
                    <Button sx={{
                        backgroundColor:'rgb(255, 154, 6)',
                        border:'solid 2px rgb(255, 154, 6)',
                        margin:'10px',
                        color:'white'
                    }} id={styles.botonAplicar} size="small">Ver Empleo</Button>
                </Link>
                <Button sx={{
                    backgroundColor:' #e5e5e5 ',
                    border:'solid 2px rgb(0, 105, 192)',
                    margin:'10px',
                    color:'rgb(0, 105, 192)'
                }} id={styles.botonGuardar} size="small">Guardar</Button>
            </CardActions>
        </Card>
        ))
    
    );
}