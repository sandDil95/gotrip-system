import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/Package.css';

import whale from '../../assets/images/whale.jpg';
import udawalawa from '../../assets/images/udawalawa.jpg';
import sigiriya from '../../assets/images/sigiriya.jpg';
import mirissa from '../../assets/images/mirissa.jpg';
import galle_tour from '../../assets/images/galle_tour.jpg';
import wilpaththu from '../../assets/images/wilpaththu.jpg';



class Package extends Component {
    constructor(props){
        super(props);
        this.state ={resultset:[
            
        ]}
        this.handlePage = this.handlePage.bind(this);
        this.view1 = this.view1.bind(this);
        this.view2 = this.view2.bind(this);
        this.view3 = this.view3.bind(this);
        this.view4 = this.view4.bind(this);
        this.view5 = this.view5.bind(this);
        this.view6 = this.view6.bind(this);
        this.view7 = this.view7.bind(this);



    }

    view1(e){
        this.props.history.push('/whale_watching')

    }
    view2(e){
        this.props.history.push('/Udawalawa')

    }
    view3(e){
        this.props.history.push('/Galle')

    }
    view4(e){
        this.props.history.push('/classic')

    }
    view5(e){
        this.props.history.push('/tour')

    }
    view6(e){
        this.props.history.push('/wilpaththu')

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
                                        <div class="phone d-flex flex-row align-items-center justify-content-start">
                                            <a onClick={this.login}>Login</a>
                                        </div>
                                        <div class="phone d-flex flex-row align-items-center justify-content-start">
                                            <a onClick={this.handlePage}>Supplier</a>
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
                            <img className="card-img-top" src={whale}  alt=""/><br/><br/>
                            
                            
                            <div class="details">
									<h4><b>Whale Watching Tour</b></h4>
									<p>
									Come watch, study and photograph the largest creatures on earth, 
									a destination famed for some of the finest Whale and Dolphin sightings in the world. 
									</p><br/>
									<ul class="package-list">
									<h5><li class="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>6 hours</span>
										</li><br/>
										
										<li class="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" class="price-btn">$88</a>
										</li><br/></h5>													
									</ul>
								</div>

								<button onClick={this.view1} type="submit" className="btn btn-primary">Explore</button>
                            
								<button onClick={this.view7} type="submit" className="btn btn-warning" style={{float:'right'}}>Book now</button>
								
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={udawalawa} alt=""/>
                            <br/><br/>
							<div class="details">
									<h4><b>Udawalawa Safari</b></h4>
									<p>
									Explore the finest and most luxurious wildlife splendours of Sri Lanka, 
									in its untamed glory, with a stirring Sri Lanka Safari Ride. 	</p>
									<br/>
									<ul class="package-list">
									<h5><li class="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>9 hours</span>
										</li><br/> 
										
										<li class="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" class="price-btn">$104</a>
										</li><br/></h5>												
									</ul>
								</div>

								<button onClick={this.view2} type="submit" className="btn btn-primary">Explore</button>
								<button onClick={this.view7} type="submit" className="btn btn-warning" style={{float:'right'}}>Book now</button>
							</div>	
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={galle_tour} alt=""/>
                            <br/><br/>
							<div class="details">
									<h4><b>Galle Full Day Tour</b></h4>
									<p>
									Experience the colorful colonial city of Galle.
									Explore and learn more about its tumultuous history as a hub for trade.
									</p><br/>
									<ul class="package-list">
									<h5><li class="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>12 hours</span>
										</li><br/>
										
										<li class="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" class="price-btn">$99</a>
										</li><br/></h5>													
									</ul>
								</div>

								<button onClick={this.view3} type="submit" className="btn btn-primary">Explore</button>
								<button onClick={this.view7} type="submit" className="btn btn-warning" style={{float:'right'}}>Book now</button>
							</div>	
                    
                   </div>
                   <div className="card-pkg ">
                        <div className="card-body ">
                             <img className="card-img-top" src={sigiriya} alt=""/>
							 <br/><br/>
							<div class="details">
									<h4><b>Classic Mini Tour</b></h4>
									<p>
									Explore the classic attractions of Sri Lanka.experience the 
									island's rich cultural & natural heritages.
									</p><br/>
									<ul class="package-list">
									<h5><li class="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>4 days and 3 nights</span>
										</li><br/>
										
										<li class="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" class="price-btn">$669</a>
										</li><br/></h5>													
									</ul>
								</div>

								<button onClick={this.view4} type="submit" className="btn btn-primary">Explore</button>
								<button onClick={this.view7} type="submit" className="btn btn-warning" style={{float:'right'}}>Book now</button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                             <img className="card-img-top" src={mirissa} alt=""/>
							 <br/><br/>
							<div class="details">
									<h4><b>Tour Srilanka</b></h4>
									<p>
									Discover the best tour in Sri Lanka, fill up 
									your schedules with  luxurious, serene and exciting tropical holidays!
									</p><br/>
									<ul class="package-list">
									<h5><li class="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 5 nights</span>
										</li><br/>
										
										<li class="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" class="price-btn">$1071</a>
										</li><br/></h5>													
									</ul>
								</div>

								<button onClick={this.view5} type="submit" className="btn btn-primary">Explore</button>
								<button onClick={this.view7} type="submit" className="btn btn-warning" style={{float:'right'}}>Book now</button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={wilpaththu} alt=""/>
                            <br/><br/>
							<div class="details">
									<h4><b>Wilpaththu Tour</b></h4>
									<p>
									Enjoy the best Journey through the Wild in a quiet and unhurried way.
									</p><br/>
									<ul class="package-list">
									<h5><li class="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>18 hours</span>
										</li><br/>
										
										
										<li class="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" class="price-btn">$130</a>
										</li><br/></h5>													
									</ul>
								</div>

								<button onClick={this.view6} type="submit" className="btn btn-primary">Explore</button>
								<button onClick={this.view7} type="submit" className="btn btn-warning" style={{float:'right'}}>Book now</button>
                        </div>
                    </div>
                 </div>

                </div>
                
                
			
			

			
			

                
                <br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
export default Package;