import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import './css/package_booking.css';





class package_booking extends Component {
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
            <div className="booking-content">
                <div className="booking-content">
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
                
                
			

                <div className="card-booking ">
                        <div className="card-body " id="package">
                            <form >
                            <h2><center>Grab Your Journey Here ! </center></h2>   
                            <div class="form-group">
                                <label for="email">Arrival date</label>
                                <input type="email" class="form-control" id="date"></input>
                               </div>
                            <div class="form-group">
                                <label for="pwd">Pickup place</label>
                                <input type="email" class="form-control" id="pickup"></input>
                                </div>
                         <div class="form-group ">
                                 <label for="Adults" >No. of Adults</label>
                                 <input type="email" class="form-control" id="email"></input>  
                        
                 </div>

                 <div class="form-group ">
                                 <label for="Children" >No.of Children</label>
                                 <input type="email" class="form-control" id="email"></input>  
                        
                 </div>
  <div className="btn-submit">
      <button type="submit" class="btn btn-primary" >Submit</button></div>
</form>
                            
                           </div> 
                           

                           </div>

                           </div>

              
                
                <br/><br/><br/><br/>
                <Footer/>
                </div>
            
        )
    }
}
export default package_booking;