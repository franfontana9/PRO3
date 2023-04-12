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
        console.table(this.props.info.album)
        return(
            <div>
                <Link to={'/detalle/' + this.props.info.album.id}>
                    <img src={this.props.info.album.cover_medium} alt="tapa de disco"/>
                </Link>
                <div>
                    <h3>{this.props.info.title}</h3>
                    <div>
                    <BotonFavoritos id={this.props.info.id} categoria={CATEGORIAS.album}/>
                    </div>
                    <div>
                        <h4>Desripcion</h4>
                        <button onClick={() => {this.setState({descripcionVisible:!this.state.descripcionVisible})}}>{this.state.descripcionVisible? '-': '+'}</button>   
                        {this.state.descripcionVisible && 
                            <p>detalle </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default CardCanciones