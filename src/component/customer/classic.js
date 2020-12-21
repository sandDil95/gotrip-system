import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/package_detail.css';

import sigiriya from '../../assets/images/sigiriya.jpg';

class classic extends Component {
    constructor(props){
        super(props);
        this.state ={resultset:[
            
        ]}
        this.handlePage = this.handlePage.bind(this);
        this.view7=this.view7.bind(this);
    }
    view7(e){
        this.props.history.push('/package_booking')

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
							<img class="img-fluid" src={sigiriya} alt=""/>
                            
						</div>
						<div class="col-lg-6 info-right">
							<h6>$88.00 per person</h6>
							<h1>Classic Mini Tour</h1><br/>
							<p>
                            If you’ve only got limited time in Sri Lanka, spend less time planning and more time sightseeing on a 3-night tour that provides a cultural and historical introduction for first-time visitors. Without having to worry about arranging transfer, accommodation, or activities, you’ll travel between Negombo, Kandy, and Kithulgala and benefit from the insider knowledge of a guide throughout.

                            <br/><br/>
                            <ul>
                            <li >Get a cultural overview of Sri Lanka on a 3-day tour from Colombo</li><br/>
                            <li>Tick off highlights without worrying about planning in advance</li><br/>
                            <li>Letting someone else drive gives you more time to focus on the scenery</li><br/>
                            <li>All accommodation, select meals, and airport transfers are included</li><br/>
                         
                            </ul>

                            
                            <h2>What is Included</h2><br/>
                            <ul>
                            <li >Accommodations (3-nights)</li><br/>
                            <li> pick up and drop off</li><br/>
                            <li >Transport by private vehicle</li><br/>
                            <li >Coffee and/or Tea</li><br/>
                            <li >Breakfast </li><br/>
						</ul>
                        </p>
                        <button onClick={this.view7} type="submit" className="btn btn-warning btn-lg" style={{float:'right'}}>Book now</button>
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
export default classic;