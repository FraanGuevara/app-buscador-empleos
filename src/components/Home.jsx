import React from 'react'
import '../App.css';

export default function Home() {
  return (
    <>
        <div className='home'>
            <div className='home-imgAndButton'>
            <div class="capa"></div>
                <button className='home-button__about'>About PAGINA</button>
            </div>
            <div className='home-buttonsLogAndSign'>
                <h1 style={{display:'flex', alignItems:'flex-end', justifyContent:'center'}}>Nombre de la empresa y leyenda</h1>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <button className='home-button__login'>Login </button>
                    <button className='home-button__signUp'>Sign up</button>
                </div>
            </div>
        </div>
    </>
  )
}
