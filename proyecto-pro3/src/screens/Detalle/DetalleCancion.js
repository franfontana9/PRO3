import React from "react"
import BotonFavoritos from "../../components/Favoritos/BotonFavoritos"

const DetalleCancion = ({cancion}) => (
    <div>
        <header>
            <h1>{cancion.title}</h1>
            <BotonFavoritos /> 
        </header>
        <img src={cancion.album.cover_medium} alt="tapa de disco"/>
        <p>Album: {cancion.album.title}</p>
        <p>Fecha de lanzamiento: {cancion.release_date}</p>

        <div>
        <img src={cancion.artist.picture_small} alt="imagen artistas"/>
        <p>Artista: {cancion.artist.name}</p>
        </div>

        <audio controls>
            <source src={cancion.preview} type="audio/mpeg"/>
        </audio>
        </div>
)

export default DetalleCancion