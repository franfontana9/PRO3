import React, { Component } from 'react'
import ContenedorCanciones from '../../components/ContenedorCanciones/ContenedorCanciones';
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums';
import PaginaBuscador from '../PaginaBuscador/PaginaBuscador'
import './styles.css'

 class Home extends Component {
  render() {
    return (
      <>
        <main>
          <section className='home'>
            <article className='article'>
              <h2 className='title'>TOP SONGS</h2>
              <ContenedorCanciones/>
              </article> 
              <article className='article'> 
              <h2 className='title'>TOP ALBUMS</h2>
              <ContenedorAlbums/>
              </article> 
          </section>
        </main>
      </>
    )
  }
}


export default Home