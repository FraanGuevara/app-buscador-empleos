import React from 'react'
import CardEmpleos from './CardEmpleos'
import FiltrosEmpleos from './FiltrosEmpleos'
import styles from './EmpleosPostulantes.module.css'

export default function EmpleosPostulantes() {
  return (
    <>
      <div className={styles.containerEmpleos}>
        <div className={styles.containterFiltrosEmpleos}>
          <FiltrosEmpleos />
        </div>
        <div style={{width:'300px'}}></div>
        <div className={styles.containterCardEmpleos} >
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
          <CardEmpleos />
        </div>
      </div>
    </>
  )
}
