import React from "react";
import { Link } from 'react-router-dom'

function CardCanciones(props){
    return(
        <Link to={'/'}>
        <div>
            <ul>
                <h5>{props.info.title}</h5>
                <img src={props.info.album.cover}/>
            </ul>
        </div>
        </Link>
    )
}

export default CardCanciones