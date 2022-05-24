import React, { useState, useEffect } from 'react'
import { postJwt } from '../api'
import CardPostulaciones from './CardPostulaciones';
import styles from '../components/Empleos/EmpleosPostulantes.module.css';
import CardEmpleosGuardados from './CardEmpleosGuardados';
import { Box } from '@mui/material'

export default function Postulaciones() {

  const [postulaciones, setPostulaciones] = useState([]);


    useEffect(() => {
      postJwt('jobs/me')
    .then(res => setPostulaciones(res.data))
    .catch(error => console.log(error))
    }, [])

  return (
    <Box className={styles.containterEmpleos} sx={{marginTop: '90px'}}>
        <div style={{ width: 'auto' }}></div>
        <div className={styles.containterCardEmpleos} >
        <CardPostulaciones
          postulacion={postulaciones}/>
          {/* <h3 style={{color:'black'}}>Empleos guardados</h3> */}
          {/* <CardEmpleosGuardados/> */}
        </div>
      </Box>
  )
}
