import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';


const Su=()=>{
    return(
        <>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />

      </Routes>
        </>
    )
}

export default Layout