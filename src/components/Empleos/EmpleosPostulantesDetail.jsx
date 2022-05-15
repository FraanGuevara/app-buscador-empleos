import { Button } from '@mui/material'
import React from 'react'
import styles from './EmpleosPostulantes.module.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';
import CardEmpleos from './CardEmpleos'

export default function EmpleosPostulantesDetail() {
    return (
        <>
            <div className={styles.containterEmpleoDetail}>
                <Link to='/empleos'>
                    <Button id={styles.botonVolverEmpleoDetail}>  ←  Volver al listado</Button></Link>
                <div>
                    <div className={styles.titulosEmpleoDetail}>
                        <h1>Frontend Junior / Semi senior</h1>
                        <h3>AZZA Informatica S.A.ㅤ-ㅤ <p style={{ display: 'inline', fontWeight: 'normal' }}>Rosario, Santa fe</p></h3>
                    </div>
                    <div className={styles.navbarEmpleoDetail}>
                        <div><Button id={styles.navbarEmpleoDetailBoton}>Oferta</Button></div>
                        <div><Button id={styles.navbarEmpleoDetailBoton}>Empresa</Button></div>
                        <div><Button id={styles.navbarEmpleoDetailBoton}>Ofertas similares</Button></div>
                    </div>
                </div>
                <div className={styles.descripcionEmpleoDetail}>
                    <h3>Descripcion de la oferta</h3>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <p className={styles.descripcionEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iste nihil, commodi consequatur, numquam pariatur, dolores maxime facilis illum rerum totam repellendus ut optio! Praesentium corporis eos at officia saepe.</p>
                    <hr />
                </div>
                <div className={styles.cardEmpleo}>
                    <div className={styles.cardEmpleoEmpresa}>
                        <img className={styles.cardEmpleoFoto} src="https://picsum.photos/200" alt="Logo empresa" />
                        <h4>AZZA Informatica S.A. </h4>
                        <p style={{ color: 'green', marginBottom: '80px' }}>Empresa verificada ✔️</p>
                    </div>
                    <h2>Frontend Junior / Semi senior</h2>
                    <p style={{ display: 'inline', fontWeight: 'normal' }}>Rosario, Santa fe</p>
                    <div className={styles.cardEmpleoBotonDiv}>
                        <Button className={styles.cardEmpleoBoton}> Postularme</Button>
                        <Button className={styles.cardEmpleoBotonGuardar}> <BookmarkBorderIcon /> </Button>

                    </div>
                </div>
                <div className={styles.empresaEmpleoDetail}>
                    <h3 className={styles.empresaEmpleoDetailParrafo}>Datos de la Empresa</h3>
                    <h4 className={styles.empresaEmpleoDetailParrafo}>Acerca de AZZA Informatica S.A. </h4>
                    <p className={styles.empresaEmpleoDetailParrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi reiciendis eaque animi. Dignissimos aliquid magnam veniam iusto recusandae pariatur quaerat corrupti beatae iure dolorum? Eaque et enim velit quas?</p>
                    <h4>Beneficios</h4>
                    <br />
                    <h4>items sobre beneficions con iconos</h4>
                    <div className={styles.iconosEmpresa}>
                        <p>Items</p>
                        <p>Items</p>
                        <p>Items</p>
                        <p>Items</p>
                        <p>Items</p>
                        <p>Items</p>
                    </div>
                </div>
                <hr />

                <div>
                    <h2>OFERTAS SIMILARES</h2>
                    <div className={styles.ofertasSimilares}>
                        <CardEmpleos />
                        <CardEmpleos />
                        <CardEmpleos />
                        <CardEmpleos />
                    </div>
                </div>
            </div>

        </>
    )
}
