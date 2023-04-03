import React, {Component} from 'react'


class ContenedorAlbums extends Component{
    //1 que se ejecuta
    constructor(props){
        super(props)
        this.state={
            albums:[]
        }
    }
    //3 que se ejecuta
    // componentDidMount(){
    //     fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/302127')
    //     .then(res => res.json())
    //     .then(data => data => this.setState({
    //         albums: data.results
    //     }))
    //     .catch(err => console.log(err))
    // }
    render(){
        return(
            <></>
        )
    }
}

export default ContenedorAlbums