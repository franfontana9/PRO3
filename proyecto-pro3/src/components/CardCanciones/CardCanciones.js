import React, { Component } from "react";
import { Link } from 'react-router-dom'
import BotonFavoritos from "../Favoritos/BotonFavoritos";
import { CATEGORIAS } from "../../constants";

class CardCanciones extends Component {

    constructor(props) {
        super(props)
        this.state = {
            descripcionVisible: false,
            estaEnFavoritos: false,
        }
    }

    render() {
        console.table(this.props.info.track)
        return(
            <div>
<               Link to={'/detalle/' + (this.props.info.id)}>
                <img src={this.props.info.cover_medium} alt="tapa de cancion"/>
                </Link>
                <div>
                    <h3>{this.props.info.title}</h3>
                    <div>
                    <BotonFavoritos id={this.props.info.id} categoria={CATEGORIAS.cancion}/>
                    </div>
                    <div>
                        <h4>Desripcion</h4>
                        <button onClick={() => {this.setState({descripcionVisible:!this.state.descripcionVisible})}}>{this.state.descripcionVisible? '-': '+'}</button>   
                        {this.state.descripcionVisible && 
                            <p>hola, aca va un poco de info </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default CardCanciones