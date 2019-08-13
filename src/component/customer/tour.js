import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/package_detail.css';

import mirissa from '../../assets/images/mirissa.jpg';

class tour extends Component {
    constructor(props){
        super(props);
        this.state ={resultset:[
            
        ]}
        this.handlePage = this.handlePage.bind(this);
    }

    handlePage(){
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
                                                <Link to="/" className="nav-link">Accomadations</Link>
                                            </li>
                                            <li>
                                                <Link to="/vehicle" className="nav-link">Vehicles</Link>
                                            </li>
                                            <li className="nav-item active">
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
                                        <div class="book_button trans_200">
                                            <a onClick={this.handlePage}>Supplier</a>
                                        </div>
                                    </div>
                                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header><br/><br/><br/><br/><br/><br/><br/><br/>


          

            <section class="about-info-area section-gap">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6 info-left">
							<img class="img-fluid" src={mirissa} alt=""/>
						</div>
						<div class="col-lg-6 info-right">
							<h6>$88.00 per person</h6>
							<h1>Tour Srilanka</h1><br/>
							<p>
                            Go in search of whales on this 4- to 6-hour morning whale watching cruise from Galle.  don a life vest and cruise onto the Indian Ocean aboard a comfortable, 50-foot (15-meter) boat, with an expert skipper and crew. Savor a continental breakfast and tea or coffee as you sail to areas frequented by whales. Watch for species such as blue, sperm, killer, humpback and pilot whales in the waters, snap once-in-a-lifetime photos and look out for other marine creatures, including dolphins and sea turtles.
                            <br/><br/>
                            <ul>
                            <li >4- to 6-hour morning whale watching boat trip from Galle</li><br/>
                            <li>Sail onto the Indian Ocean to spot blue, pilot, sperm and other species of whales</li><br/>
                            <li>Watch for other wildlife such as dolphins, whale sharks and sea turtles</li><br/>
                            <li>Enjoy a light breakfast and morning tea or coffee as you sail</li><br/>
                            <li>Life vests and safety equipment fitted on boardFamily-friendly cruise</li><br/>
                            </ul>

                            
                            <h2>What is Included</h2><br/>
                            <ul>
                            <li >Breakfast</li><br/>
                            <li> pick up and drop off</li><br/>
						</ul>
                        </p>
                        <button className="btn btn-warning btn-lg" style={{float:'right'}}>Book now</button>
                        </div>
					</div>
				</div>	
			</section>




                <br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
export default tour;
