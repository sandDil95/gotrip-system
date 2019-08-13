import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import './css/Header.css';

class Header extends Component {
    
    render() {
        return (
            <header class="header">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="header_content d-flex flex-row align-items-center justify-content-start">
                                <Link to="/" className="nav-link">
                                    <div class="logo">
                                        {/* <a href="#"> */}
                                            <img className="imglogo" src={imglogo} alt=""/>
                                        {/* </a> */}
                                    </div>
                                </Link>

                                <nav class="main_nav">
                                    <ul class="d-flex flex-row align-items-center justify-content-start">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">Accomadations</Link>
                                        </li>
                                        <li>
                                            <Link to="/vehicle" className="nav-link">Vehicles</Link>
                                        </li>
                                        <li>
                                            <Link to="/Travel-Packages" className="nav-link">Travel-Packages</Link>
                                        </li>
                                        <li >
                                            <Link to="/Tailor-Made-Tour" className="nav-link">Tailor-Made Tour</Link>
                                        </li>
                                        <li>
                                            <Link to="/About-us" className="nav-link">About Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="header_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Supplier
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to="/supplier-login" className="nav-link">SignIn</Link>
                                        <Link to="/supplier-register" className="nav-link">SignUp</Link>
                                    </div>                                
                                </div>
                                <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            );
        }
    }

export default Header;
