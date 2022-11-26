import React from "react";
import './App.css'

import Logo from '../componets/templete/Logo'
import Nav from '../componets/templete/Nav'
import Main from '../componets/templete/Main'
import Footer from '../componets/templete/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main/>
        <Footer/>
    </div>