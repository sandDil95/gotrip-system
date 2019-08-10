import React, {Component} from 'react';
import './css/Header.css';

// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { withRouter } from "react-router";

import imglogo from '../../assets/logo.png';
// import axios from 'axios';




class Header extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    
    //   componentDidMount(){
    //     axios.get('http://localhost:4000/hotel/username/'+this.state.email) //check vehicle only or vehicle with driver
    //     .then(response => {
    //         console.log("mount")
    //         let vehicles = response.data.map((vehicle) => {
    //             this.setState({vehicleId : vehicle._id}) //get selected vehicle id to send vehicle booking page
    //             console.log(this.state.vehicleId+"response");
    //             return (
    //                 <div key={vehicle._id}>
    //                     <div className="card d-block" id="vehiclecard">
    //                         <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
    //                         <div className="card-body">
    //                             <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
    //                             <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
    //                             <span> Location: <span>{vehicle.locations}</span></span><br/>
    //                             {/* <Link to="/customer/vehiclebooking"><button>Book Now</button></Link> */}
    //                             <button type ="submit" className="btn btn-primary" onClick={(e) => {this.bookVehicle(e, this.state.vehicleId)}}>Book Now</button>
                                
    //                             {/* <p class="card-text"></p> */}
    //                         </div>
    //                     </div><br/>
    //                 </div>
    //             )
    //         },error=>{
    //             alert("Not found")
    //         })
    //         // this.setState({ vehicles : vehicles });
    //         // console.log("state",vehicles)
    //     })    
    //   }
    render(){
        const loginRegLink = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to="/supplier/vehicle-registration" className ="nav-link">
                        Register of Vehicle
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/supplier/hotel-registration" className ="nav-link">
                        Register of Accomadations
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/supplier/login" className ="nav-link">
                        Login
                    </Link>
                </li>
                
            </ul>
        )
        const userLink = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to="/profile" className ="nav-link">
                        User
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/supplier/send-email" className ="nav-link">
                        Report-Genaration
                    </Link>
                </li>
                <li className = "nav-item">
                    <a href="" onClick = {this.logOut.bind(this)} className ="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        
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

                                    {/* <nav class="main_nav">
                                        <ul class="d-flex flex-row align-items-center justify-content-start">
                                            <li className="nav-item active">
                                                <Link to="/supplier/" className="nav-link">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/supplier/vehiclereg" className="nav-link">Vehicle-Registration</Link>
                                            </li>
                                            <li>
                                                <Link to="/supplier/hotelreg" className="nav-link">Hotel-Registration</Link>
                                            </li>
                                            <li >
                                                <Link to="/Tailor-Made-Tour" className="nav-link">Tailor-Made Tour</Link>
                                            </li>
                                            <li>
                                                <Link to="/About-us" className="nav-link">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/profile" className="nav-link">Profile</Link>
                                            </li>
                                        </ul>
                                    </nav> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                

           </div>
        )
    }
}
export default withRouter(Header) ;