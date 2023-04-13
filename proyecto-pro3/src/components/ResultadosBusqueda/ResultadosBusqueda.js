import React, { Component } from "react";
import { API_ENDPOINTS, CATEGORIAS } from "../../constants";


class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props)
    this.state= {
      consulta:'',
      // categoria: CATEGORIAS.album,
      resultadosBusqueda: []
    }
    // atamos(bind) nuestra funcion handleOnChange a nuestro componente (esto es generico)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event){
    this.setState(
      {
        [event.target.name]: event.target.value 
      })
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.consulta !== this.state.consulta) {
      console.info('consulta', this.state.consulta)
      const urlBusqueda = `${API_ENDPOINTS.busqueda}${this.state.consulta}`
  
      fetch(urlBusqueda)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          resultadosBusqueda: data.data
        })
      })
    }
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="consulta" placeholder="Buscar 🔍" onChange={this.handleOnChange}/>
          <button onClick={() => {this.setState({consulta: '', resultados: []})}}>Limpiar</button>            
        {/*}
          <select name="categoria" onChange={this.handleOnChange}>
            <option value={CATEGORIAS.album}>Album</option>
            <option value={CATEGORIAS.cancion}>Cancion</option>
          </select>
        */}
        </form>   


        {this.state.resultadosBusqueda.length > 0  && this.state.consulta != '' && 
          <section>
            <h2>Resultados de busqueda</h2>  
            <ul>
              {this.state.resultadosBusqueda.map((element) => {
                return <li key={element.id}>{element.title}</li>
              })}
            </ul>
          </section>
        } 
      </>
    )
  }

}

export default ResultadosBusqueda