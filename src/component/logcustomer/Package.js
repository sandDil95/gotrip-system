import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/Package.css';

import yala from '../../assets/images/yala.jpg';
import whale from '../../assets/images/whale.jpg';
import sigiriya from '../../assets/images/sigiriya.jpg';
import kandy from '../../assets/images/kandy.jpg';
import galle from '../../assets/images/galle.jpg';
import colombo from '../../assets/images/colombo.jpg';


class Package extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : props.location.email,
        }
        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        this.props.history.push('/supplier-login')
    }
    render(){
        return(
            <div>
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
                                            <li>
                                                <Link to={{pathname:"/duplogged", email: this.state.email}} className="nav-link">Accomadations</Link>
                                            </li>
                                            <li>
                                                <Link to={{pathname:"/logged/vehicle", email: this.state.email}} className="nav-link">Vehicles</Link>
                                            </li>
                                            <li className="nav-item active">
                                                <Link to="/logged/Travel-Packages" className="nav-link">Travel-Packages</Link>
                                            </li>
                                            <li >
                                                <Link to={{pathname:"/logged/Tailor-Made-Tour", email: this.state.email}} className="nav-link">Tailor-Made Tour</Link>
                                            </li>
                                            <li>
                                                <Link to={{pathname:"/logged/About-us", email: this.state.email}} className="nav-link">About Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div class="header_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                                        <div class="book_button trans_200">
                                            <a onClick={this.logOut}>Log Out</a>
                                        </div>
                                    </div>
                                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="inner cover lead" role="main">

                 <div className="card-deck">
                    <div className="card-pkg ">
                        <div className="card-body " id="package">
                            <img className="card-img-top" src={whale}  alt="" /><br/>
                            <h4 className="card-title">Mirissa whale watching</h4>
                            <p className="card-text">Blue whales are the biggest animal live on the earth and Mirissa is the one of most suitable spot to watch blue whales and other whales too.</p>
                            <button className="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={sigiriya} alt=""/><br/>
                            <h4 className="card-title">Sigiriya</h4>
                            <p className="card-text">sigiriya popular as eighth wonder of the world among the tourists and it was the one of Asia's oldest landscaped garden.</p>
                            <button className="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={colombo} alt=""/>
                            <h4 className="card-title">Colombo City Tour</h4>
                            <p className="card-text">The Colombo City Tour is Colombo's first ever open deck city tour service launched by Sri Lanka Tourism Development Authority and Ebert Silva Holidays (Pvt) Ltd.</p>
                            <button className="btn btn-primary">Book now>></button>
                        </div>
                   </div>
                   <div className="card-pkg ">
                        <div className="card-body ">
                             <img className="card-img-top" src={yala} alt=""/>
                            <h4 className="card-title">Yala National Park</h4>
                            <p className="card-text">This is the second largest national park in Sri Lanka.Yala is home to Asian elephants, leopards and variety of beautiful endemic birds.</p>
                            <button class="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                             <img className="card-img-top" src={kandy} alt=""/>
                            <h4 className="card-title">Kandy</h4>
                            <p className="card-text">The name Kandy was given to the city of Kanda Uda Rata by the British. Its present day Sri Lankan name is Maha Nuwara while the historical name is Senkadagalapura. Kandy history and heritage city of Kandy. </p>
                            <button class="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={galle} alt=""/>
                            <h4 className="card-title">Galle Fort</h4>
                            <p className="card-text">The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", is a historical, archaeological and architectural heritage monument.</p>
                            <button className="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                 </div>

                </div><br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
export default Package;