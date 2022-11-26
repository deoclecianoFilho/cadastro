import React from "react";
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from '../componets/templete/Logo'
import Nav from '../componets/templete/Nav'
import Main from '../componets/templete/Main'
import Footer from '../componets/templete/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Inicio">Main</Main>
        <Footer/>
    </div>