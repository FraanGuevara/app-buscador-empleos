import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './CardEmpleos.module.css'
import { Link } from 'react-router-dom';

export default function CardEmpleos() {
    return (
        <Card elevation={24} sx={{ 
            maxWidth: 345,
            margin:'5%',
        }}>
            <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/200"
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Empleo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ut, necessitatibus deserunt molestiae ullam illo corporis praesentium quo, delectus consectetur perferendis enim assumenda id accusamus quaerat labore laudantium tempore odio?
                </Typography>
            </CardContent>
            <CardActions sx={{
                backgroundColor:'#e5e5e5',
                padding:'15px'
            }}>
                <Link to='/empleos/empleoDetail'>
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
    );
}
