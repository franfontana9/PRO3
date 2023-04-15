import React, { Component } from 'react'
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums';
import './mostrar.css'


 class Albums extends Component {
  render() {
    return (
      <>
        <main>
          <section className='mostrar'>
              <article className='article'> 
              <h2 className='title'>TODOS LOS ALBUMS</h2>
              <ContenedorAlbums/>
              </article> 
          </section>
        </main>
      </>
    )
  }
}


export default Albums
