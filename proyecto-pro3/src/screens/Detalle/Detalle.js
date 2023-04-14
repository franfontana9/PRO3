import React, { Component }  from 'react';
import { API_URL, CATEGORIAS } from '../../constants';
import DetalleAlbum from './DetalleAlbum';
import DetalleCancion from './DetalleCancion';
import './detalle.css';

class Detalle extends Component {
    constructor(props){
       super(props)
       this.state = {
        id:this.props.match.params.id,
        categoria: this.props.match.params.category,
        info: undefined // contendra un objeto album o cancion
    }
}
    
    componentDidMount() {
        fetch(`${API_URL}${this.state.categoria}/${this.state.id}`)
        .then(res => res.json())
        .then(data => this.setState({info: data}))
        .catch(err => console.log(err))
    }

    render () {
        console.log(this.state.info)
        return (
            <>
            {this.state.info && 
            <main  className="detalle"> 
                {this.state.categoria === CATEGORIAS.album
            ? <DetalleAlbum album={this.state.info} className="album-detail" />
            : <DetalleCancion cancion={this.state.info} className="track-detail" />
                }
            </main>
            
            }
            </>
        )
    }
}

export default Detalle