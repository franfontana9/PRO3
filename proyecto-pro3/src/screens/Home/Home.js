import React, { Component } from 'react'
import ContenedorCanciones from '../../components/ContenedorCanciones/ContenedorCanciones';
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums';
import './styles.css'


 class Home extends Component {
  render() {
    return (
      <>
        <h1>My App in React</h1>
        <main className='home'>
          <h2>Canciones</h2>
          <ContenedorCanciones/>
          <h2>Albums</h2>
          <ContenedorAlbums/>
        </main>
      </>
    )
  }
}


export default Home

