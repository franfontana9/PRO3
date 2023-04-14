import React, {Component} from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorCanciones from "../../components/ContenedorCanciones/ContenedorCanciones";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda";
import './paginabuscador.css'

class PaginaBuscador extends Component{
  constructor(props){
    super(props)
    this.state = {
      buscador: [],
      backup: []
    }
  }

    actualizadorDeEstado(data){
        this.setState({
          busqueda: data
        })
      }

      componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then( resp => resp.json())
        .then( data => this.setState({
          buscador: data.data,
          backup: data.data
        }))
        .catch( err => console.log(err))
      }

    render() {
        return (
          <div>
            <ResultadosBusqueda
            actualizador={(data) => this.actualizadorDeEstado(data)}
            fuente = {this.state.backup} 
            />
            <ContenedorAlbums albums={this.state.albums} className="contenedor"/>
            <ContenedorCanciones canciones={this.state.canciones} className="contenedor"/>
          </div>
        )
      }
    
}

export default PaginaBuscador