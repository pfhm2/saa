import React, { useState } from 'react'
import axios from 'axios';

export default function Chatbot({ tipoComida, otroTipo, setRespuestaRecetas }) {

    const [mensajes, setMensajes] = useState([{ "tipo": "bot", "mensaje": "Tienes algun nombre de receta en mente? escribelo bb" }]);
    const [usuarioInput, setUsuarioInput] = useState('');
    const [resultados, setResultados] = useState(false);


    const [recetas, setRecetas] = useState("")
    const [ingredientes, setIngredientes] = useState("")
    const [duracion, setDuracion] = useState("")
    const [dificultad, setDificultad] = useState("")

    const buscarRecetas = async () => {
        const url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAcY3GLObHIodEoZQxGxru6YmsnvnuMIIY&cx=28ea1731115ecc9ce&q=" + tipoComida + " " + recetas + " " + ingredientes;
        const response = await axios.get(url);
        console.log("la espuesta ", response.data.items)
        setRespuestaRecetas([response.data.items[0], response.data.items[1], response.data.items[2]])
    }

    const enviarMensaje = () => {
        if (usuarioInput.trim() === '' || usuarioInput.length === 0 || resultados) {
            return;
        }
        let newArr = [{ "tipo": "usuario", "mensaje": usuarioInput }, ...mensajes];
        console.log(newArr)
        switch (mensajes.length) {
            case 1:
                setRecetas(usuarioInput)
                setMensajes([{ "tipo": "bot", "mensaje": "Que ingredientes te gustarian? (chocolate, sal .. etc)" }, { "tipo": "bot", "mensaje": "creo que conosco esa receta! demenos similares .. c;" }, ...newArr]);
                break;
            case 4:
                setIngredientes(usuarioInput)
                setMensajes([{ "tipo": "bot", "mensaje": "tiempo de preparacion? (15m? 30m?, 1h, 2h?)" }, { "tipo": "bot", "mensaje": "Buenas elecciones!" }, ...newArr]);
                break;
            case 7:
                setDuracion(usuarioInput)
                setMensajes([{ "tipo": "bot", "mensaje": "Que dificulatad de preparacion te gustaria guapo? (baja, media, alta)" }, { "tipo": "bot", "mensaje": "Lo tengo!" }, ...newArr]);
                break;
            case 10:
                setDificultad(usuarioInput)
                setMensajes([{ "tipo": "bot", "mensaje": "Perfecto!! Ve en la parte de abajo encontre unas recetas muy guapas!" }, ...newArr]);
                setResultados(true);
                buscarRecetas();
                break;

            default:

                break;
        }
        setUsuarioInput('')
    }
    return (
        <div class="chat">
            <div className="chat-box">

                {mensajes && mensajes.map(msj => {
                    return (<div className={msj.tipo === 'bot' ? "bot-respuesta" : "usuario-respuesta"}>
                        <p>{msj.mensaje}</p>
                    </div>)
                })}

            </div>
            <div className="chat-abajito">
                <input className="chat-input" value={usuarioInput} onChange={(e) => setUsuarioInput(e.target.value)} type="text" />
                <p className={resultados ? "enviar-block" : "enviar-boton"} onClick={enviarMensaje}>Enviar</p>

            </div>
        </div>
    )
}
