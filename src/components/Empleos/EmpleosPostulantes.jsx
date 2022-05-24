import React, { useState, useEffect } from 'react';
import CardEmpleos from './CardEmpleos';
import FiltrosEmpleos from './FiltrosEmpleos';
import styles from './EmpleosPostulantes.module.css';
import { getJwt } from '../../api';


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
      <div className={styles.containerEmpleos}>
        <div className={styles.containterFiltrosEmpleos}>
          <FiltrosEmpleos 
          empleos={empleos}
          datosDinamicos={datosDinamicos}
          setDatosDinamicos={setDatosDinamicos}/>
        </div>
        <div style={{ width: '300px' }}></div>
        <div className={styles.containterCardEmpleos} >
          <CardEmpleos
          empleos = {empleos}
          datosDinamicos={datosDinamicos}
          />
        </div>
      </div>
    </>
  )
}
