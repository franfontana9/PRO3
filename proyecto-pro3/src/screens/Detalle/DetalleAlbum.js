import React from "react"
import BotonFavoritos from "../../components/Favoritos/BotonFavoritos"

  const DetalleAlbum = ({album}) => (
    <div>
        <header>
            <h1>{album.title}</h1>
            <BotonFavoritos/>
        </header>
        <img src={album.cover_medium} alt="tapa de disco"/>
        <p>Fecha de lanzamiento: {album.release_date}</p>

        <div>
        <img src={album.artist.picture_small} alt="imagen artistas"/>
        <p>Artista: {album.artist.name}</p>
        </div>

        <div>
            <h2>Generos</h2>
            <ul>
                {album.genres.data.map(genero => <li>{genero.name}</li>)}
            </ul>
        </div>
        <div>
            <h2>Lista de canciones</h2>
            <ul>
                {album.tracks.data.map(cancion => <li>{cancion.title}</li>)}
            </ul>
        </div>
        </div>
)

export default DetalleAlbum