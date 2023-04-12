import React, { Component } from "react"; 


class BotonFavoritos extends Component {
    constructor(props){
        super(props)
        this.state={
            estaEnFavoritos: false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
    
        if(storageAArray !== null){
          let estaEnElArray = storageAArray.includes(this.props.info.id)
          if(estaEnElArray){
            this.setState({
              esFavorito: true
            })
          }
        }
      }

    aniadirAFavoritos(id){
        let storage = localStorage.getItem('favoritos')
        if(storage === null){
            let idEnArray = [id]
            let arrayAString = JSON.stringify(idEnArray)
            localStorage.setItem('favoritos', arrayAString)
        }else{
            let deStringAArray = JSON.parse(storage)
            deStringAArray.push(id)
            let arrayAString = JSON.stringify(deStringAArray)
            localStorage.setItem('favoritos', arrayAString)
        }
        this.setState({
            esFavorito: true
          })
    }

    sacarFav(id){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
        let filtro = storageAArray.filter((elm)=> elm !== id)
        let filtroAString = JSON.stringify(filtro)
        localStorage.setItem('favoritos', filtroAString)
    
        this.setState({
          esFavorito: false
        })
      }
      render(){
        return(
            <button>

            </button>
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