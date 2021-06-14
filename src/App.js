import './App.css';
import React, { useState } from 'react';
import Opciones from './components/opcionContenedor'
import SegundaParte from './components/segundaParte'
import ChatBot from './components/Chatbot'

function App() {

  const [startBot, setStartBot] = useState(false);
  const [tipoComida, setTipoComida] = useState("")
  const [otroTipo, setOtroTipo] = useState("")
  const [respuestaRecetas, setRespuestaRecetas] = useState([])


  const empezar = () => {
    setStartBot(true);
  }

  return (
    <div className="App">
      <h1>Recetas Bot</h1>
      <div class="container-main">

        <div class="container-main-inicio" >
          <h3>Soy linguini el Bot recetas !</h3>
          <p class="subtitulo">Que te gustaria cocinar hoy?</p>
          <p class="opcion-elegida">Opcion: {tipoComida}</p>
          {startBot && <ChatBot tipoComida={tipoComida} otroTipo={otroTipo} setRespuestaRecetas={setRespuestaRecetas} />}
          <div style={{ display: startBot ? 'none' : 'block' }}>
            <Opciones setTipoComida={setTipoComida} />


            <div class="otra-opcion">
              <p>Otra comida?</p>
              <input className="otra-input" type="text" placeholder="'Mexicana', 'Coreana'" value={otroTipo} onChange={(e) => setOtroTipo(e.target.value)}></input>
            </div>

            <div className="empezar-div">
              <p className="empezar-boton" onClick={empezar}>Empezar</p>
            </div>
          </div>


        </div>

        <SegundaParte respuestaRecetas={respuestaRecetas} />
      </div>
    </div>
  );
}

export default App;
