import React from "react";
import Navbar from "./Navbar";
import "./header.css";

const Header = () => (
    <header>
        <div className="header-brand">
            <h1>MÜSIK</h1>
            <img className="header-brand" src="../../img/müsik.jpeg" alt='brand logo'/>
        </div>
        <Navbar/>
    </header>
)

export default Header