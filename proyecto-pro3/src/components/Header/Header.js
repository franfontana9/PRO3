import React from "react";
import Navbar from "./Navbar";
<<<<<<< HEAD
import "./header.css";

const Header = () => (
    <header>
        <div className="header-brand">
            <h1>MÜSIK</h1>
            <img className="header-brand" src="../../img/müsik.jpeg" alt='brand logo'/>
        </div>
=======
import ResultadosBusqueda from "../ResultadosBusqueda/ResultadosBusqueda";

const Header = () => (
    <header className="header-brand">
        <h1>Nombre Grupo</h1>
        <img src="#" alt='brand logo'/>
        <ResultadosBusqueda /> 
>>>>>>> 44e48b0faf859d5b4740c2ba497293e45c5fe347
        <Navbar/>
    </header>
)

export default Header