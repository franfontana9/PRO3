import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import BotonFavoritos from "../Favoritos/BotonFavoritos";
import { CATEGORIAS } from "../../constants";

class CardAlbums extends Component {

    constructor(props) {
        super(props)
        this.state = {
            descripcionVisible: false,
            estaEnFavoritos: false,
        }
    }

    render() {
        console.log(this.props.info)

        return(
            <div>
<               Link to={`/detalle/${CATEGORIAS.album}/${this.props.info.id}`}>
                    <img src={this.props.info.cover_medium} alt="tapa de disco"/>
                </Link>
                <div>
                    <h3>{this.props.info.title}</h3>
                    <div>
                    <BotonFavoritos id={this.props.info.id} categoria={CATEGORIAS.albums}/>
                    </div>
                    <div>
                        <h4>Desripcion</h4>
                        <button onClick={() => {this.setState({descripcionVisible:!this.state.descripcionVisible})}}>{this.state.descripcionVisible? '-': '+'}</button>   
                        {this.state.descripcionVisible && 
                            <div>
                            <p>Artista: {this.props.info.artist.name}</p>
                            <p>Posicion: {this.props.info.position}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default CardAlbums