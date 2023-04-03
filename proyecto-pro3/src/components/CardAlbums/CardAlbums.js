import React from "react";
import { Link } from 'react-router-dom'


function CardAlbums(props){
    return(
        <Link to={'/'}>
        <div>
            <ul>
                <h5>{props.info.title}</h5>
                <img src={props.info.cover_medium}/>
            </ul>
        </div>
        </Link>
    )
}

export default CardAlbums