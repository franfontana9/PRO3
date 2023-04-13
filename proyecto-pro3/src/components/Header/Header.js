import React from "react";
import Navbar from "./Navbar";
import ResultadosBusqueda from "../ResultadosBusqueda/ResultadosBusqueda";

const Header = () => (
    <header className="header-brand">
        <h1>Nombre Grupo</h1>
        <img src="#" alt='brand logo'/>
        <ResultadosBusqueda /> 
        <Navbar/>
    </header>
)

export default Header