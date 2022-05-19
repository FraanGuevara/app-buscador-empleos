import React, { useState, useEffect } from 'react';
import CardEmpleos from './CardEmpleos';
import FiltrosEmpleos from './FiltrosEmpleos';
import styles from './EmpleosPostulantes.module.css';
import { getJwt } from '../../api';


export default function EmpleosPostulantes() {

  const [empleos, setEmpleos] = useState([])

  useEffect(() => {
    getJwt("jobs")
      .then(res => setEmpleos(res.data))
      .catch(error => console.log(error));
  }, [])








  return (

    <>
      <div className={styles.containerEmpleos}>
        <div className={styles.containterFiltrosEmpleos}>
          <FiltrosEmpleos />
        </div>
        <div style={{ width: '300px' }}></div>
        <div className={styles.containterCardEmpleos} >
          <CardEmpleos
          empleos = {empleos}
          />
        </div>
      </div>
    </>
  )
}
