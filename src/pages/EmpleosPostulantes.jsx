import React, { useState, useEffect } from 'react';
import CardEmpleos from '../components/Empleos/CardEmpleos';
import FiltrosEmpleos from '../components/Empleos/FiltrosEmpleos';
import styles from '../components/Empleos/EmpleosPostulantes.module.css';
import { getJwt } from '../api';
import { Box } from '@mui/material'


export default function EmpleosPostulantes() {

  const [empleos, setEmpleos] = useState([])

  useEffect(() => {
    getJwt("jobs")
      .then(res => setEmpleos(res.data))
      .catch(error => console.log(error));
  }, [])


  return (

    <>
      <Box className={styles.containterEmpleo} sx={{marginTop: '90px', marginLeft: '300px'}}>
        <div className={styles.containterFiltrosEmpleos}>
          <FiltrosEmpleos />
        </div>
        <div className={styles.containterCardEmpleos} >
          <CardEmpleos
          empleos = {empleos}
          />
        </div>
      </Box>
    </>
  )
}
