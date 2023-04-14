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
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks')
        .then(res => res.json())
        .then(data => this.setState({canciones: data.tracks.data}))
        .catch(err => console.log('err'))
    }
    componentWillUnmount(){

    }

    

    //2 que se ejecuta
    //4 que se ejecuta si ocurre actualización
    render(){
        console.log('Soy el render')
        return(
            <div>
                {
                    this.state.canciones.length <= 0 ?
                    <img className="notFoundImg" src="../../img/loader.gif"></img> :
                    <>
                        {
                        this.state.canciones.map(cancion => <article>
                            <CardCanciones info={cancion} />
                        </article>
                        )
                        }
                    </>
                }
            </div>
        )
    }

}

export default ContenedorCanciones