import React, {Component} from 'react'
import CardCanciones from '../CardCanciones/CardCanciones'

class ContenedorCanciones extends Component{
    //1 que se ejecuta
    constructor(props){
        super(props)
        this.state={
            canciones:[]
        }
    }
    //3 que se ejecuta
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => this.setState({
            canciones: data.results
        }))
        .catch(err => console.log(err))
    }
    componentWillUnmount(){

    }

    

    //2 que se ejecuta
    //4 que se ejecuta si ocurre actualización
    render(){
        console.log('Soy el render')
        return(
            <div>
                <h1>Aqui tendremos algo de musica</h1>
                {
                    this.state.canciones.length <= 0 ?
                    <h2>Trayendo Canciones...</h2> :
                    this.state.canciones.map(cancion => <article>
                        <CardCanciones info={cancion} />
                    </article>)
                }
            </div>
        )
    }

}

export default ContenedorCanciones