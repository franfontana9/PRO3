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
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/albums')
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
                    <img className="notFoundImg" src="../../img/loader.gif"></img> :
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