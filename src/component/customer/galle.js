import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/package_detail.css';

import galle from '../../assets/images/galle.jpg';

class Galle extends Component {
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
							<img class="img-fluid" src={galle} alt=""/>
						</div>
						<div class="col-lg-6 info-right">
							<h6>$99 per person</h6>
							<h1>Galle Full Day Tour</h1><br/>
							<p>
                            Experience the charms of Galle and Sri Lanka’s southwest coast on a day trip from Colombo,View endangered turtles at the Kosgoda Turtle Hatchery; see the stilt fishermen at Weligama; and explore UNESCO-listed Galle Fort, where 17th-century ramparts enclose colonial buildings, museums, and shops. Learn about Galle’s maritime history, and visit Talwatte's simple-but-moving Tsunami Photo Museum to chart the impact of the 2004 disaster. Before returning to Colombo, enjoy lunch and discover Bentota Beach.


                            <br/><br/>
                            <ul>
                            <li >Day trip to Galle and Sri Lanka’s southwest coast from Colombo</li><br/>
                            <li>Visit the Kosgoda Turtle Hatchery to see endangered sea turtles being cared for</li><br/>
                            <li>Take photos of Weligama’s stilt fishermen, who fish from poles lodged in the sea</li><br/>
                            <li>Explore 17th-century Galle Fort, a fortified complex of colonial mansions, museums and arty shops</li><br/>
                            <li>Witness the devastation of the 2004 tsunami at the Talwatte Tsunami Photo Museum</li><br/>
                            </ul>

                            
                            <h2>What is Included</h2><br/>
                            <ul>
                            <li >Lunch</li><br/>
                            <li> pick up and drop off</li><br/>
                            <li> Fuel surcharge</li><br/> 
                            <li> Bottled water</li><br/> 
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
export default Galle;