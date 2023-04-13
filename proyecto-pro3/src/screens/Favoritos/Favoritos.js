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
        this.traerFavoritos('track')
        this.traerFavoritos('album')
        
    }

    traerFavoritos(nombreStorage){
        let storage = localStorage.getItem(nombreStorage)

        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id => {
                    return(
                        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${nombreStorage}/${id}`)
                        .then(resp => resp.json())
                        .then(data => data )
                    )
                })
            )
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
    }

    render () {
        return (
            <>
            {/* <ContenedorAlbums info={this.props.favoritos}/>
            <ContenedorCanciones info={this.props.favoritos}/> */}
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
