import React, {Component} from 'react'
import CardAlbums from '../CardAlbums/CardAlbums'


class ContenedorAlbums extends Component{
    //1 que se ejecuta
    constructor(props){
        super(props)
        this.state={
            albums:[]
        }
    }
   
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/albums')
        .then(res => res.json())
        .then(data => this.setState({albums: data.albums.data}))
        .catch(err => console.log(err))
    }
    render(){
        console.log('Soy el render')
        return(
            
            <div>
                {
                    this.state.albums.length <= 0 ?
                    <h2>Trayendo Albums...</h2> :
                    <>
                        {
                        this.state.albums.map(album => 
                        <article>
                            <CardAlbums info={album} />
                        </article>
                        )
                        }
                    </>
                }
            </div>
        )
    }
}

export default ContenedorAlbums