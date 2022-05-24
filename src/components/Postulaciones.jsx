import React, { useState, useEffect } from 'react'
import { postJwt } from '../api'
import CardPostulaciones from './CardPostulaciones';
import styles from '../components/Empleos/EmpleosPostulantes.module.css';
import CardEmpleosGuardados from './CardEmpleosGuardados';

export default function Postulaciones() {

  const [postulaciones, setPostulaciones] = useState([]);


    useEffect(() => {
      postJwt('jobs/me')
    .then(res => setPostulaciones(res.data))
    .catch(error => console.log(error))
    }, [])

  return (
    <>
    <div className={styles.containerEmpleos}>
        <div style={{ width: 'auto' }}></div>
        <div className={styles.containterCardEmpleos} >
        <CardPostulaciones
          postulacion={postulaciones}/>
          <h3 style={{color:'black'}}>Empleos guardados</h3>
          <CardEmpleosGuardados/>
        </div>
      </div>
    </>
  )
}
