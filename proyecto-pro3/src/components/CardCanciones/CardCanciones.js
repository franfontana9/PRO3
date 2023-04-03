import React from "react";
import { Link } from 'react-router-dom'


function CardCanciones(props){
    return(
        <link to={'/'}>
        <div>
            <h1>Top Songs</h1>
            <ul>
                <h5>{props.info.name}</h5>
                <img src={props.info.img}/>
            </ul>
        </div>
        </link>
    )
}

export default CardCanciones