import {Input} from '@mui/material'
import React, {useState} from 'react'

export default function FiltrosEmpleos({empleos,setDatosDinamicos}) {

    const [busqueda, setBusqueda] = useState('');

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtro(e.target.value)
    }

    const filtro = (texto) => {
        let resultadoBusqueda = empleos.filter(elemento => {
            for (let i=0; i<elemento.category.length ; i++) {
                if (elemento.category[i].toString().toLowerCase().includes(texto.toLowerCase()) ) {
                return elemento
                }
            }
            if (elemento.location) {
                if (elemento.location.country.toString().toLowerCase().includes(texto.toLowerCase())) {
                    return elemento
                } else if (elemento.location.province.toString().toLowerCase().includes(texto.toLowerCase())) {
                    return elemento
                }
            }
        })
        setDatosDinamicos(resultadoBusqueda);
    }

    return <Input value={busqueda} placeholder='puesto/categoria' sx={{width: '100%', textAlign: 'center'}} onChange={handleChange}/>
    
}
