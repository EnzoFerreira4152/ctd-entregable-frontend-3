import React, { Component } from 'react';

class Recordatorio extends Component{

  render(){
    return(
      <div className="recordatorio">
        <h3>Selección Anterior: {this.props.eleccion}</h3>
        <div>
          <h4>Historial de opciones elegidas: </h4>
          <ul>
          {this.props.historial.map((e, i) => <li key={e+i}>{e}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export { Recordatorio }