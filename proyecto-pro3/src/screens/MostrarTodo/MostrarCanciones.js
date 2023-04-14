import React, { Component } from 'react'
import ContenedorCanciones from '../../components/ContenedorCanciones/ContenedorCanciones'
import PaginaBuscador  from '../PaginaBuscador/PaginaBuscador'

let canciones = "https://developers.deezer.com/api/track"


class Canciones extends Component {
 
    constructor(props){
        super(props)
        this.state = {
          cancion:[]
        
        }
      }
    
      actualizadorDeEstado(data){
        this.setState({
          cancion: data
        })
      }
    
      componentDidMount(){
        
        fetch(canciones)
            .then(resp => resp.json())
                .then(data => this.setState({
                    cancion: data.results
    
                }))
            .catch(e => console.log(e)) 
    
        
    }
 
    render() {
    return (
        <div>
            <ContenedorCanciones data={this.state.cancion}/>
        </div>
    )
  }
}

export default Canciones