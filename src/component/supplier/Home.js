import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import './css/Header.css';
// import Header from './Header';
import Footer from './Footer';
import './css/Home.css';
import axios from 'axios';
// import img1 from '../../assets/images/room_1.jpg';

class Home extends Component {
    constructor(props){
        super(props);
        this.handlePage = this.handlePage.bind(this);
    }
    handlePage(){
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <header class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="header_content d-flex flex-row align-items-center justify-content-start">
                                    <Link to="/supplier" className="nav-link">
                                        <div class="logo">
                                            {/* <a href="#"> */}
                                                <img className="imglogo" src={imglogo} alt=""/>
                                            {/* </a> */}
                                        </div>
                                    </Link>

                                    <nav class="main_nav">
                                        <ul class="d-flex flex-row align-items-center justify-content-start">
                                            <li className="nav-item active">
                                                <Link to="/supplier" className="nav-link">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/supplier/vehiclereg" className="nav-link">Vehicle-Registration</Link>
                                            </li>
                                            <li>
                                                <Link to="/supplier/hotelreg" className="nav-link">Hotel-Registration</Link>
                                            </li>
                                            {/* <li>
                                                <Link to="/supplier/Notify" className="nav-link">Notifying</Link>
                                            </li> */}
                                            <li>
                                                <Link to="/supplier/profile" className="nav-link">Profile</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div class="header_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                                        <div class="book_button trans_200">
                                            <a onClick={this.handlePage}>Logout</a>
                                        </div>
                                    </div>
                                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>



                <div id="contentbody">
                    <div id="content-body" className="card">
                        {/* Menu */}                        
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <div class="home">
                            {/* <div class="parallax_background parallax-window" data-parallax="scroll" data-speed="0.8">
                                <img src={img1} />
                            </div> */}
                            <div class="home_container">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="home_content text-center">
                                                <div class="home_title"><h1>Distribute your services</h1></div>
                                                <div class="home_text">By supplying services and get benefits</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="search_box"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    </div>

                    
                    
                    </div>
                <Footer/>
                
        </div>    
    );
  }
}

export default Home;
