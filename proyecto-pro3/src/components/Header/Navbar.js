import React from 'react';
import { Link } from "react-router-dom";
const opciones = [
    {
        nombre: 'Home',
        path: '/'
    },
    {
        nombre: 'Favoritos',
        path: '/favoritos'
    },
]

function Navbar(){
    return (
        <nav>
            <ul className="main-nav">
            { opciones.map((elm, index) => 
                <li key={index}>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>
            )}
            </ul>
            <ul className="user">
                <li>
                    <img src=" " alt=""/>
                </li>
        </ul>
        </nav>
    )
}

export default Navbar