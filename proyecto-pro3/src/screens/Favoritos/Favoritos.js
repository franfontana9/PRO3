import React, { Component } from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorCanciones from "../../components/ContenedorCanciones/ContenedorCanciones";

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.setState({
            favoritos: []
        })
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id => {
                    return(
                        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${id}`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            )
            .then(data => this.setState({
                favoritos: data
            }))
            .catch(err => console.log(err))


        }
    }

    render () {
        return (
            <>
                <h1>Favoritos ❤️</h1>
                <ContenedorAlbums albums={this.state.favoritos} />
                <ContenedorCanciones canciones={this.state.favoritos}/> 
            </>
        )
    }
}

export default Favoritos
