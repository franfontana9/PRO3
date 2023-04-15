import React, { Component } from 'react'
import ContenedorCanciones from '../../components/ContenedorCanciones/ContenedorCanciones';
import './canciones.css'


 class Canciones extends Component {
  render() {
    return (
      <>
      <main>
        <section className='canciones'>
          <article className='article'>
            <h2 className='title'>TODAS LAS CANCIONES</h2>
            <ContenedorCanciones/>
            </article> 
        </section>
      </main>
    </>
    )
  }
}


export default Canciones

