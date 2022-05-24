import {Box,Button} from '@mui/material'
import React, {useEffect, useState} from 'react'
import styles from '../components/Empleos/EmpleosPostulantes.module.css'
import {Link, useParams} from 'react-router-dom'
import {getJwt} from '../api'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

export default function EmpleosPostulantesDetail() {

    const [trabajadores, setTrabajadores] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getJwt("jobs/"+id)
            //.then(res => console.log(res.data.applicants))    
            .then(res => setTrabajadores(res.data.applicants))
            .catch(error => console.log(error))
    }, [])

    return (
        <Box className={styles.containterEmpleoDetail} sx={{marginTop: '90px'}}>
            <Link to='/postulados'>
                <Button id={styles.botonVolverEmpleoDetail}>  ←  Volver al listado</Button>
            </Link>
            {trabajadores.length>0 ? (
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    {trabajadores.map(cadaUno =>
                        <Card elevation={24} key={cadaUno.id} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '20vw',
                            minWidth: '200px',
                            margin:'20px'}}>
                            <CardHeader title={cadaUno.name} />
                            <img className={styles.cardEmpleoFoto} src="https://picsum.photos/200" alt="Logo empresa" />
                            <CardContent>
                            <Typography variant="body1" color="text.primary">
                                {cadaUno.email}
                            </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Box>
            ) : (
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card elevation={24} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '20vw',
                        minWidth: '200px',
                        margin:'20px'}}>
                        <CardHeader title='no hay postulados' />
                    </Card>
                </Box>
            )}
        </Box>
    )
}
