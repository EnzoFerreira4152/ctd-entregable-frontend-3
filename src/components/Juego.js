import React, { Component } from 'react';
import data from '../helpers/data.json';
import Swal from 'sweetalert2';

import { Opciones } from './Opciones'
import { Recordatorio } from './Recordatorio'

class Juego extends Component{
  state = {
    historial: [],
    contador: 0,
    eleccionPrevia: "",
  }

  componentDidMount(){
    Swal.fire({
      title: '¡Hola extraño!',
      text: 'Que tus elecciones sean sabias :)',
      timer: 4200,
      timerProgressBar: true,
      icon: 'success',
      showConfirmButton: false
    })
  }

  handleClick = (e)=>{
    let historial = this.state.historial;
    let opcionElegida = e.target.id;
    if(this.state.contador !== 0){
      historial.push(opcionElegida);
    }
    if(this.state.contador < 4){
      this.setState({
        historial: historial,
        contador: this.state.contador + 1,
        eleccionPrevia: opcionElegida
      })
    }else{
      alert('Fin');
    }
  }

  //Me devuleve el objeto con la info de la siguiente historia.
  siguienteHistoria = ()=>{
    if(this.state.contador === 0){
      return data[0]
    }else{
      let id = ((this.state.contador + 1) + this.state.eleccionPrevia.toLowerCase()).toString();
      let siguiente = data.filter(o => o.id === id);
      return siguiente[0];
    }
  }

  render(){
    let sgHs = this.siguienteHistoria();
    return(
      <div className="layout">
        <h1 className="historia">{sgHs.historia}</h1>
        <Opciones 
          handler={this.handleClick} 
          opciones={sgHs.opciones} 
        />
        <Recordatorio 
          eleccion={this.state.eleccionPrevia}
          historial={this.state.historial}
        />
      </div>
    )
  }
}

export { Juego }