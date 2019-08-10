import React , {Component} from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import {imageupload} from './UserFunctions';
import axios from 'axios';

class Profile extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            email:'',
            address:'',
        }
        // this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        this.handlePage = this.handlePage.bind(this);
    }
    handlePage(){
        this.props.history.push('/')
    }
    // onChange(e){
    //     this.setState({[e.target.name]:e.target.value})
    // }

    // onSubmit(e){
    //     e.preventDefault()
    //     console.log("Succesfuly"); 
    //     const ImageUpload ={
           
    //         vehicale_photo:this.state.vehicale_photo,
    //         profile_image:this.state.profile_image
            
            
        
    //     }
    //     imageupload(ImageUpload).then(res => {
    //              if(ImageUpload){
    //                  this.props.history.push('/profile')
    //              }
                
            
    //     })
    // }
    // componentDidMount(){
    //     axios.get('http://localhost:4000/supplier')
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         first_name:decoded.first_name,
    //         last_name:decoded.last_name,
    //         email:decoded.email,
    //         address:decoded.address
    //     })
    // }    
            // file:decoded.file,
    // componentDidMount(){
    //     axios.get('http://localhost:4000/supplier')
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         first_name:decoded.first_name,
    //         last_name:decoded.last_name,
    //         email:decoded.email,

    //     // axios.get('http://localhost:4000/supplier')
    //     // .then(response => {
    //     //   this.setState({ first_name: response.data });
    //     //   this.setState({ last_name: response.data });
    //     //   this.setState({ email: response.data });
    //     // })
    //     // .catch(function (error) {
    //     //   console.log(error);
    //     // })
    //     })
        
    // }
    render(){
        return(

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
                                            <li>
                                                <Link to="/supplier/" className="nav-link">Home</Link>
                                            </li>
                                            <li >
                                                <Link to="/supplier/vehiclereg" className="nav-link">Vehicle-Registration</Link>
                                            </li>
                                            <li>
                                                <Link to="/supplier/hotelreg" className="nav-link">Hotel-Registration</Link>
                                            </li>
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
                <div><br/><br/><br/><br/><br/><br/><br/></div>
                <div className ="container">
                    <div className="jumbotron mt-5"> 
                         <div className ="col-sm-8 mx-auto">
                             <h1 className ="text-center">PROFILE</h1>
                         </div>
                         <table className=" table col-md-6 mx-auto">
                             <tbody>
                                 <tr>
                                     <th>First Name</th>
                                     <th>{this.state.first_name}</th>

                                    
                                 </tr>
                                 <tr>
                                     <th>Last Name</th>
                                     <th>{this.state.last_name}</th>
                                    
                                 </tr>
                                 <tr>
                                     <th>Email</th>
                                     <th>{this.props.email}</th>
                                    
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <th>{this.state.address}</th>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer/>
                </div>
        )
    }
}
export default Profile;
