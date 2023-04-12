import React, {component} from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorCanciones from "../../components/ContenedorCanciones/ContenedorCanciones";

class PaginaBuscador extends component{
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

    ComponentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(response => response.json())
        .then(data => this.setState({
            busqueda: data.data,
            backup: data.data
        }))

    }

    render() {
        return (
          <div>
            <PaginaBuscador
            actualizador={(data) => this.actualizadorDeEstado(data)}
            fuente = {this.state.backup} 
            />
            <ContenedorAlbums albums={this.state.albums} />
            <ContenedorCanciones canciones={this.state.canciones}/>
          </div>
        )
      }
    
}

export default PaginaBuscador