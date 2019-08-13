import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/package_detail.css';

import udawalawa from '../../assets/images/udawalawa.jpg';

class Udawalawa extends Component {
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
							<img class="img-fluid" src={udawalawa} alt=""/>
						</div>
						<div class="col-lg-6 info-right">
							<h6>$104 per person</h6>
							<h1>Udawalawa Safari</h1><br/>
							<p>
                            Search for wild elephants and other animals on a private day trip to Sri Lanka’s Udawalawe National Park.Journey into the mountain-backed interior by private vehicle and take a 4x4 game-spotting drive: looking for the park’s herds of elephants—often seen with young—and water monitor lizards, water buffalo, deer, and leopard.

                            <br/><br/>
                            <ul>
                            <li >Private full-day Udawalawe National Park day trip from Bentota, Kalutara, Beruwala, Induruwa, or Ahungalle areas</li><br/>
                            <li>Venture into central Sri Lanka to Udawalawe, an important haven for wild elephants</li><br/>
                            <li>Watch for elephants, sometimes seen in herds, with young, and bathing in the water</li><br/>
                            <li>Look for water monitor lizards, water buffalo, leopard, and birds such as eagles and peacocks</li><br/>
                            <li>Includes choice of departure times and entrance fees, with stop for lunch at own expense</li><br/>
                            </ul>

                            
                            <h2>What is Included</h2><br/>
                            <ul>
                            <li >Bottled water</li><br/>
                            <li> pick up and drop off</li><br/>
                            <li> Safari Jeep Cost</li><br/>
                            <li> Transportation by Private Vehicles</li><br/>
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
export default Udawalawa;