import React from 'react'

export default function segundaParte({ respuestaRecetas }) {
    return (
        <div className="segunda-parte">
            <h2>ʕ•ᴥ•ʔ Lo que encontre para ti.</h2>
            <div className='contenedor-recetas'>
                {respuestaRecetas.length > 0 && respuestaRecetas.map((receta, count) => {
                    return (
                        <div class="card" onClick={() => window.open(receta.link)}>
                            <h3>Receta #{count + 1}</h3>
                            <h4>{receta.title}</h4>
                            <img class="resultado_imagen"
                                src={receta.pagemap.cse_image[0].src} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
