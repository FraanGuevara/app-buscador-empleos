import React from 'react'
import CardEmpleos from './CardEmpleos'
import FiltrosEmpleos from './FiltrosEmpleos'

export default function EmpleosPostulantes() {
  return (
    <>
    <div style={{color:'black', height:'100%'}}>
        <FiltrosEmpleos/>
        <CardEmpleos/>
    </div>
    </>
  )
}
