import React, {useRef} from 'react'

import Box from '@mui/material/Box'
import WorkIcon from '@mui/icons-material/Work'
import CategoryIcon from '@mui/icons-material/Category'
import MapIcon from '@mui/icons-material/Map'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

import Typography from '@mui/material/Typography'

import '../App.css'
import {postJwt} from '../api'
import {useNavigate} from 'react-router-dom'

export default function NuevoTrabajo(props) {

    const title = useRef()
    const category1 = useRef()
    const category2 = useRef()
    const category3 = useRef()
    const category4 = useRef()
    const country = useRef()
    const province = useRef()
    const city = useRef()
    const salary = useRef()
    const navigate = useNavigate()

    const handleNewJob = (event) => {
        event.preventDefault()
        postJwt("jobs" ,{
            title: title.current.value,
            category: [category1.current.value,category2.current.value,category3.current.value,category4.current.value],
            location: {
                country: country.current.value,
                province: province.current.value,
                city: city.current.value
            },
            salary: salary.current.value
        })
        .then(({data}) => {
            if (data.error) {
                console.log(data)
            } else {
                navigate("/jobCreated",{replace:true})
            }
        })
    }

    return (
        <div className='home position'>
            <div className='home-img' />
            <div className='home-ingreso'>
                <Typography variant="h1" sx={{fontFamily: 'Macondo', padding: '10px', color: 'white'}}>Crea una postulación!</Typography>
                <form onSubmit={handleNewJob} className='w100'>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px'}}>
                        <label htmlFor="title">
                            <WorkIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='title' id='title' placeholder='título' className='myInput' ref={title} required />
                    </Box>
                    <Box sx={{display: 'flex', width: '60%', minWidth: '280px'}}>
                        <Box sx={{
                            display: 'flex',
                            width: '50%',
                            minWidth: '140px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="category1">
                                <CategoryIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='text' name='category' id='category1' placeholder='categoría 1' className='myInput' ref={category1} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            width: '50%',
                            minWidth: '140px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="category2">
                                <CategoryIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='text' name='category' id='category2' placeholder='categoría 2' className='myInput' ref={category2} required />
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', width: '60%'}}>
                        <Box sx={{
                            display: 'flex',
                            width: '50%',
                            minWidth: '140px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="category3">
                                <CategoryIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='text' name='category' id='category3' placeholder='categoría 3' className='myInput' ref={category3} required />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            width: '50%',
                            minWidth: '140px',
                            backgroundColor: 'rgb(0, 105, 192)',
                            border: '5px solid rgb(0, 105, 192)',
                            borderRadius: '50px',
                            marginTop: '5px'}}>
                            <label htmlFor="category4">
                                <CategoryIcon sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: 'rgb(0, 105, 192)',
                                    border: '0 solid rgb(0, 105, 192)',
                                    borderRadius: '50px 0 0 50px',
                                    padding: '10px'}}/>
                            </label>
                            <input type='text' name='category' id='category4' placeholder='categoría 4' className='myInput' ref={category4} required />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px',
                        marginTop: '5px'}}>
                        <label htmlFor="country">
                            <MapIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='country' id='country' placeholder='país' className='myInput' ref={country} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px',
                        marginTop: '5px'}}>
                        <label htmlFor="province">
                            <LocationOnIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='province' id='province' placeholder='provincia' className='myInput' ref={province} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px',
                        marginTop: '5px'}}>
                        <label htmlFor="city">
                            <LocationCityIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='text' name='city' id='city' placeholder='ciudad' className='myInput' ref={city} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '60%',
                        minWidth: '280px',
                        backgroundColor: 'rgb(0, 105, 192)',
                        border: '5px solid rgb(0, 105, 192)',
                        borderRadius: '50px',
                        marginTop: '5px'}}>
                        <label htmlFor="salary">
                            <AttachMoneyIcon sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                color: 'white',
                                backgroundColor: 'rgb(0, 105, 192)',
                                border: '0 solid rgb(0, 105, 192)',
                                borderRadius: '50px 0 0 50px',
                                padding: '10px'}}/>
                        </label>
                        <input type='number' name='salary' id='salary' placeholder='salario' className='myInput' ref={salary} required />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60%',
                        minWidth: '280px',
                        height: '50px',
                        borderRadius: '50px',
                        marginTop: '20px'}}>
                        <input type="submit" value='crear!' className='myButton' required />
                    </Box>
                </form>
            </div>
        </div>
    )

}


/* 
c3@c3.com.ar     Hola1234     empleador
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ29uc3RydWNjaW9uZXMgMyIsImVtYWlsIjoiYzNAYzMuY29tLmFyIiwicm9sZSI6ImVtcGxveWVyIiwiaWQiOiI2MjgzZGM0NmFlYWE4N2QzMmM3ZDM5ZTYiLCJpYXQiOjE2NTI4MDg3NzQsImV4cCI6MTY1MzQxMzU3NH0.Xn5wUP79tBDJEbmebYg_Zhrj7wzmD-AoONqZGMQQJj8

jime.rodriguez@gmail.com     Hola1234     trabajador
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltZW5hIiwiZW1haWwiOiJqaW1lLnJvZHJpZ3VlekBnbWFpbC5jb20iLCJyb2xlIjoiYXBwbGljYW50IiwiaWQiOiI2MjgzZTNjYjlmNDBmODYxMTg4MjIwMWQiLCJpYXQiOjE2NTI4MTA2OTksImV4cCI6MTY1MzQxNTQ5OX0.uz4N6OGi94UM0-edaPiyi6AnorCjquc0c6g1nz7k9HA
*/