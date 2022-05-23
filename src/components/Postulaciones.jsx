import React, { useState, useEffect } from 'react'
import { postJwt } from '../api'
import CardPostulaciones from './CardPostulaciones';
import styles from '../components/Empleos/EmpleosPostulantes.module.css';

export default function Postulaciones() {

  const [postulaciones, setPostulaciones] = useState([]);


    /* console.log(postulaciones) */
    useEffect(() => {
      postJwt('jobs/me')
    .then(res => setPostulaciones(res.data))
    .catch(error => console.log(error))
    }, [])
    
    console.log(postulaciones)

  return (
    <>
    <div className={styles.containerEmpleos}>
        <div style={{ width: 'auto' }}></div>
        <div className={styles.containterCardEmpleos} >
        <CardPostulaciones
          postulacion={postulaciones}/>
        </div>
      </div>
    </>
  )
}
