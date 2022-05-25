import React, { useState, useEffect } from 'react';
import CardEmpleos from './CardEmpleos';
import FiltrosEmpleos from './FiltrosEmpleos';
import styles from './EmpleosPostulantes.module.css';
import { getJwt } from '../../api';
import { Box } from '@mui/material'


export default function EmpleosPostulantes() {

  const [empleos, setEmpleos] = useState([])
  const [datosDinamicos, setDatosDinamicos] = useState([]);


  useEffect(() => {
    getJwt("jobs")
      .then(res =>{ 
        setEmpleos(res.data)
        setDatosDinamicos(res.data)})
      .catch(error => console.log(error));
  }, [])


  return (

    <>
      <Box className={styles.containterEmpleo} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
        <Box sx={{
          padding: '10px',
          margin: '10px',
          border: 'solid 2px rgb(255, 154, 6)',
          width:'30%',
          minWidth: '320px'}}>
          <FiltrosEmpleos empleos={empleos} datosDinamicos={datosDinamicos} setDatosDinamicos={setDatosDinamicos} />
        </Box>
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          <CardEmpleos
          empleos = {empleos}
          datosDinamicos={datosDinamicos}
          />
        </Box>
      </Box>
    </>
  )
}
