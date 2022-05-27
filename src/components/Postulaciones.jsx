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
      <div style={{ marginTop: '15%' }}>
        <div style={{ border: 'solid 2px #2dc653', margin: '5%', marginTop: '15%', paddingLeft: '2%', paddingRight: '2%', borderRadius: '15px', backgroundColor: '#92e6a7' }}>
          <h2 style={{ color: '#004b23', textAlign: 'center', fontSize: '35px', padding: '30px' }}>Postulaciones.</h2>
          <div className={styles.containterCardEmpleos} >
            <CardPostulaciones
              postulacion={postulaciones} />
          </div>
        </div >
        <div style={{ border: 'solid 2px #014f86', margin: '5%', marginTop: '15%', paddingLeft: '2%', paddingRight: '2%', borderRadius: '15px', backgroundColor: '#89c2d9' }}>
          <h2 style={{ color: '#013a63', textAlign: 'center', fontSize: '35px', padding: '30px' }}>Empleos guardados.</h2>
          <div className={styles.containterCardEmpleos} >
            <CardEmpleosGuardados />
          </div>
        </div>
      </div>
    </>
  )
}
