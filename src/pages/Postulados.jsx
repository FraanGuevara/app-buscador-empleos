import React, { useState, useEffect } from 'react';
import CardEmpleos from '../components/Empleos/CardEmpleos';
import styles from '../components/Empleos/EmpleosPostulantes.module.css';
import {postJwt} from '../api';


export default function Postulados() {

  const [empleos, setEmpleos] = useState([])

  useEffect(() => {
    postJwt("jobs/employer")
      .then(res => setEmpleos(res.data))
      .catch(error => console.log(error));
  }, [])


  return (

    <>
        <div className={styles.containerEmpleos}>
            <div className={styles.containterFiltrosEmpleos}>
            </div>
            <div style={{ width: '300px' }}></div>
            <div className={styles.containterCardEmpleos} >
                <CardEmpleos empleos = {empleos} />
            </div>
        </div>
    </>
  )
}
