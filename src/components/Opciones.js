import React, { Component } from 'react';

class Opciones extends Component{

  render(){
    return(
      <div className='opciones'>
        <div className='opcion'>
          <button id ='A' className='botones' onClick={this.props.handler}>A</button>
          <h2>{this.props.opciones.a}</h2>
        </div>
        <div className='opcion'>
          <button id='B' className='botones' onClick={this.props.handler}>B</button>
          <h2>{this.props.opciones.b}</h2>
        </div>
      </div>
    )
  }

}

export { Opciones }