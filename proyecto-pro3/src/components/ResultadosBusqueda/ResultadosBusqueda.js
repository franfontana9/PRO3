import React, { Component } from "react";


class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props)
    this.setState= {
      valorInput:'',
    }
  }

  evitarSubmit(event){
    event.preventDefault()
    }

  metodoQueFiltra(texto, arrayFuente){
        let filtrado = arrayFuente.filter((elm)=> elm.name.toLowerCase().includes(texto.toLowerCase()))
        return filtrado
    }

  guardarValor(event){
    this.setState(
      {
        valorInput:event.target.value
      }, () => {
          let filtro = this.metodoQueFiltra(this.state.valorInput, this.props.fuente)
          this.props.actualizador(filtro)
      }
        )
      }  

  metodoQueEnvia(){
      console.log('Enviamos la info')
    }


  render() {
    return (
     <form onSubmit={(event)=> this.evitarSubmit(event)}>
        <div>
            <label>Busca lo que desees</label>
        </div>
        <div>
            <input onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput}></input>
        </div>
        <button onClick={() => this.metodoQueEnvia()}>Envar consilta</button>
     </form>   
    )
  }

}

export default ResultadosBusqueda