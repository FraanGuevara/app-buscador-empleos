import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './CardEmpleos.module.css'
import {Link} from 'react-router-dom'

export default function CardEmpleosOfrecidos({empleos}) {
    console.log(empleos)
    return (
        empleos.map(empleo =>(
            <Card elevation={24} key={empleo._id} sx={{
                width: '30vw',
                minWidth: '300px',
                margin:'20px'}}>
                <CardHeader title={empleo.title} subheader={empleo.location.province} />
                <CardMedia component="img" height="200" image="https://picsum.photos/200" alt={empleo.title} />
                <CardActions sx={{
                    backgroundColor:'#e5e5e5',
                    padding:'15px',
                    display: 'flex',
                    justifyContent: 'flex-end'}}>
                    <Link to={'/postulados/postulantesDetail/'+empleo._id}>
                        <Button sx={{
                            backgroundColor:'rgb(255, 154, 6)',
                            border:'solid 2px rgb(255, 154, 6)',
                            margin:'10px',
                            padding: '10px',
                            color:'white'
                        }} id={styles.botonAplicar} size="small">Ver Postulados 
                            <Typography sx={{
                                width: '40px',
                                height: '40px',
                                marginLeft: '10px',
                                borderRadius: '20px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                color: 'rgb(233, 121, 26)'}}>{empleo.applicants.length} </Typography>
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        ))
    
    );
}
