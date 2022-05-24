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

export default function CardEmpleos({ empleos }) {

    /* onst [estadoGuardarEmpleo, setEstadoGuardarEmpleo] = useState(false)

    const funcionGuardarEmpleo = (empleo) => {
        const arrLocal = JSON.parse(localStorage.getItem('jobsSave')) || [];
        const searchEmpleo = arrLocal.find(item => item._id === empleo._id);
        
        if (searchEmpleo === undefined) {
            const newArr = [...arrLocal, empleo];
            localStorage.setItem('jobsSave',  JSON.stringify(newArr))
            setEstadoGuardarEmpleo(true)
        } else {
            alert('Sacado de favoritos')
            setEstadoGuardarEmpleo(false)
        }
    }
 */
    return (
        empleos.map(empleo => (
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
                    {/* {estadoGuardarEmpleo === false ?
                    <Button sx={{
                        backgroundColor: ' #e5e5e5 ',
                        border: 'solid 2px rgb(0, 105, 192)',
                        margin: '10px',
                        color: 'rgb(0, 105, 192)'
                    }} onClick={()=>{
                        funcionGuardarEmpleo(empleo);}
                        } id={styles.botonGuardar} size="small">Guardar</Button> :
                        <Button sx={{
                            backgroundColor: ' #e5e5e5 ',
                            border: 'solid 2px rgb(0, 105, 192)',
                            margin: '10px',
                            color: 'rgb(0, 105, 192)'
                        }} onClick={()=>{
                            funcionGuardarEmpleo(empleo);}} id={styles.botonGuardar} size="small">Desguardar</Button>
                    } */}
                    {/* <Button sx={{
                        backgroundColor: ' #e5e5e5 ',
                        border: 'solid 2px rgb(0, 105, 192)',
                        margin: '10px',
                        color: 'rgb(0, 105, 192)'
                    }} onClick={()=>{
                        funcionGuardarEmpleo(empleo);}
                        } id={styles.botonGuardar} size="small">Guardar</Button> */}
                </CardActions>
            </Card>
        ))

    );
}
