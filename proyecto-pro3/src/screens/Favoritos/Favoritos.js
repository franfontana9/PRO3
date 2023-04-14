import React, { Component } from "react";
import CardAlbums from "../../components/CardAlbums/CardAlbums";
import CardCanciones from "../../components/CardCanciones/CardCanciones";
import "./favoritos.css";
class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state= {
            track: [],
            album: []
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
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/${nombreStorage}/${id}`)
                        .then(resp => resp.json())
                        .then(data => data )
                    )
                })
            )
            .then(data => nombreStorage === 'album' ? this.setState({album: data}) : this.setState({track: data}))
            .catch(err => console.log(err))
        }
    }

    render () {
        console.log(this.state);
        return (
            <>
            <section className="favoritos">
                <h2 className="favoritos__title">Albums Favoritos</h2>
                {
                    this.state.album.length <= 0 ?
                    <img className="notFoundImg" src="../../img/loader.gif"></img> :
                    this.state.album.map(album => 
                        <article className="favoritos__article">
                            <CardAlbums info={album} />
                        </article>)
                }
                <h2 className="favoritos__title">Canciones Favoritas</h2>
                {
                    this.state.track.length <= 0 ?
                    <img className="notFoundImg" src="../../img/loader.gif"></img> :
                    this.state.track.map(track => 
                        <article className="favoritos__article">
                            <CardCanciones info={track} />
                        </article>)
                }
            </section>
            </>
        )
    }
}

export default Favoritos
