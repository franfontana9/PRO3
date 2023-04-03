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
    componentDidMount(){
        fetch('')
        .then(res => res.json())
        .then(data => console.log(data)
        ({
        }))
        .catch(err => console.log(err))
    }
}

export default ContenedorAlbums