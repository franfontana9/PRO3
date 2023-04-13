import React, { Component } from "react"; 
import { Link } from 'react-router-dom'


class BotonFavoritos extends Component {
    constructor(props){
        super(props)
        this.state={
            estaEnFavoritos: false
        }
    }

    componentDidMount(){
      let nombreStorage = this.props.esCancion ? 'track' : 'album'
        let storage = localStorage.getItem(nombreStorage)
        let storageAArray = JSON.parse(storage)
    
        if(storageAArray !== null){
          let estaEnElArray = storageAArray.includes(this.props.id)
          if(estaEnElArray){
            this.setState({
              esFavorito: true
            })
          }
        }
      }
    
      anhadirFav(id){
        let nombreStorage = this.props.esCancion ? 'track' : 'album'
        let storage = localStorage.getItem(nombreStorage)
    
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem(nombreStorage, arrayAString)
    
        } else {
          let deStringAArray = JSON.parse(storage) 
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem(nombreStorage, arrayAString)
        }
    
        this.setState({
          esFavorito: true
        })
      }
      
    
      sacarFav(id){
        let nombreStorage = this.props.esCancion ? 'track' : 'album'
        let storage = localStorage.getItem(nombreStorage)
        let storageAArray = JSON.parse(storage)
        let filtro = storageAArray.filter((elm)=> elm !== id)
        let filtroAString = JSON.stringify(filtro)
        localStorage.setItem(nombreStorage, filtroAString)
    
        this.setState({
          esFavorito: false
        })
      }

      render(){
        return(
            <div>
            <Link to={`/favoritos/id/${this.props.info}`}>
              <img src={this.props.cover_medium}/>
              <h1>{this.props.name}</h1>
            </Link>
            {
              this.state.esFavorito ?
               <button onClick={()=> this.sacarFav(this.props.id)}> Sacar de Favs</button>
              :
                <button onClick={()=> this.anhadirFav(this.props.id)}>Añadir a Favs</button>
            }
        </div>
        )
      }

//     render(){
//         return(
//         <button onClick={() => {this.setState({estaEnFavoritos:!this.state.estaEnFavoritos})}}>
//                             {this.state.estaEnFavoritos?
//                                 <i style={{color:'crimson'}} class="fa-solid fa-heart"></i>
//                                 :
//                                 <i class="fa-regular fa-heart"></i>
//                         }
//         </button>
//         )
//     }

}
export default BotonFavoritos