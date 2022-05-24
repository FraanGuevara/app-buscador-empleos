import { Input } from '@mui/material';
import React, { useState, useEffect } from 'react'
import styles from './EmpleosPostulantes.module.css'
export default function FiltrosEmpleos({ empleos, datosDinamicos, setDatosDinamicos }) {

    const [busqueda, setBusqueda] = useState('');

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtro(e.target.value)
    }
    const filtro = (texto) => {
        let resultadoBusqueda = empleos.filter((elemento) => {
            if (elemento.category.toString().toLowerCase().includes(texto.toLowerCase()) ||
                elemento.salary.toString().toLowerCase().includes(texto.toLowerCase())
                ||
                elemento.title.toString().toLowerCase().includes(texto.toLowerCase())) {
                return elemento;
            }
        })
        setDatosDinamicos(resultadoBusqueda);
    }


    return (

        <>
            <div>
                <div className={styles.containerFiltro}>
                    <Input
                        value={busqueda}
                        placeholder='Busqueda por nombre o salario'
                        onChange={handleChange}
                    />
                </div>
            </div>

        </>
    )
}
