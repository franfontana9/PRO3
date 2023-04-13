import React, { Component } from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorCanciones from "../../components/ContenedorCanciones/ContenedorCanciones";

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state= {
            favoritos: []
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id => {
                    return(
                        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/track/${id}`)
                        .then(resp => resp.json())
                        .then(dataCancion => dataCancion),

                        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/album/${id}`)
                        .then(resp => resp.json())
                        .then(dataAlbum => dataAlbum)
                    )
                })
            )
            .then(dataCancion => this.setState({
                favoritos: dataCancion.tracks.data.id
            }))
            .then(dataAlbum => this.setState({
                favoritos: dataAlbum.albums.data.id
            }))
            .catch(err => console.log(err))


        }
    }

    render () {
        return (
            <>
            <ContenedorAlbums info={this.state.favoritos}/>
            <ContenedorCanciones info={this.state.favoritos}/>
            </>

            // <div>
            // {
            //     <>
            //     {
            //         this.state.Cancionesfavoritas.map(cancion => <article>
            //             <ContenedorCanciones info={this.state.favoritos} />
            //             </article>
            //         )}
            //     {
            //         this.state.Albumsfavoritas.map(albums => <article>
            //             <ContenedorAlbums info={this.state.favoritos} />
            //             </article>
            //        )}
            //     </>
            // }
            // </div>
        )
    }
}

export default Favoritos
