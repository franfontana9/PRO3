import React from "react";
import Navbar from "./Navbar";
import ResultadosBusqueda from "../ResultadosBusqueda/ResultadosBusqueda";
import "./header.css";

const Header = () => (
    <header className="header-brand">
            <h1>MÜSIK</h1>
            <ResultadosBusqueda /> 
            <Navbar/>
    </header>
)

export default Header