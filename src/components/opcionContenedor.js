import React from 'react'
import imgSalud from '../img/salud.png'
import imgHam from '../img/hamburger.png'
import imgPostre from '../img/postresito.png'
import imgVeg from '../img/vegano.png'
import imgEco from '../img/economica.png'


export default function opcionContenedor({ setTipoComida }) {
    return (
        <div class="opciones-contenedor">
            <div class="opcion-comida" onClick={() => setTipoComida("Postres")}>
                <img src={imgPostre} alt={'salud'} />
                <p>Postres</p>
            </div>

            <div class="opcion-comida" onClick={() => setTipoComida("Saludable")}>
                <img src={imgSalud} alt={'salud'} />
                <p>Saludable</p>
            </div>

            <div class="opcion-comida" onClick={() => setTipoComida("Rapida")}>
                <img src={imgHam} alt={'salud'} />
                <p>Rapida</p>
            </div>

            <div class="opcion-comida" onClick={() => setTipoComida("Economica")}>
                <img src={imgEco} alt={'salud'} />
                <p>Economica</p>
            </div>

            <div class="opcion-comida" onClick={() => setTipoComida("Vegetariana")}>
                <img src={imgVeg} alt={'salud'} />
                <p>Vegetariana</p>
            </div>


        </div>
    )
}
