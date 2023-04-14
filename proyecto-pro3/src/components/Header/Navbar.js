import React from 'react';
import { Link } from "react-router-dom";
import './header.css'
const opciones = [
    {
        nombre: 'Home',
        path: '/'
    },
    {
        nombre: 'Favoritos',
        path: '/favoritos'
    },
    {
        nombre: 'Mostrar todas las canciones',
        path: '/canciones'
    },
    {
        nombre: 'Mostrar todos los albums',
        path: '/albums'
    },
]

function Navbar(){
    return (
        <nav >
            <ul className="main-nav">
            { opciones.map((elm, index) => 
                <li className="main-nav" key={index}>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>
            )}
            </ul>
            
        </nav>
    )
}

export default Navbar