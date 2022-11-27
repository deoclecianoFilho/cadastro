import React from "react";
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from "react-router-dom";

import Logo from '../componets/templete/Logo'
import Nav from '../componets/templete/Nav'
import Routes from './Routes'
import Footer from '../componets/templete/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>