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
            <article>
              <PaginaBuscador/>
            </article>
            <article>
              <h2>Canciones</h2>
              <ContenedorCanciones/>
              </article> 
              <article> 
              <h2>Albums</h2>
              <ContenedorAlbums/>
              </article> 
          </section>
        </main>
      </>
    )
  }
}


export default Home

