import React, { useState, useEffect } from 'react'
import CardEmpleosOfrecidos from '../components/Empleos/CardEmpleosOfrecidos'
import {postJwt} from '../api'
import { Box } from '@mui/material'

export default function Postulados() {

    const [empleos, setEmpleos] = useState([])

    useEffect(() => {
        postJwt("jobs/employer")
          .then(res => setEmpleos(res.data))
          .catch(error => console.log(error));
    }, [])

    return (
      <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '90px'}}>
          <CardEmpleosOfrecidos empleos={empleos} />
      </Box>
    )
}
