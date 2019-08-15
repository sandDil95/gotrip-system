import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import { imageupload } from './UserFunctions';
import axios from 'axios';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
        }
        this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)

        this.handlePage = this.handlePage.bind(this);

        axios.get('http://localhost:4000/user/supplier/' + this.getuserpayload()._id).then(res => {
            console.log(res.data)
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email

            })
        }).catch(err => {

        })

    }

    importAll = (r) => {
        return r.keys().map(r);
    }
    showImages = () => {

        const images = this.importAll(require.context("D:/gotrip-system/src/component/supplier/upload", false, /\.(png|jpe?g|svg)$/));
        console.log(images);
        return images.map((data) => {
            var path = JSON.stringify(data).substring(14, 28) + ".jpg"
            return (
                <img style={{ width: 100, height: 100, alignSelf: 'center' }} src={require("./upload"+path)} class="rounded-circle" alt="Cinque Terre" />
            )
        })

    }


    selectImages = (e) => {
        e.preventDefault();
        // console.log(e.target)
        const payload = new FormData(document.getElementById("vform"));
        payload.append('booking', false)
        axios.post('http://localhost:4000/user/addImage/', payload)
            .then(res => {
                if (res) {
                    alert("added successfully")
                    // this.props.history.push('/supplier')
                } else {
                    alert("failed")
                }
            })
    }


    updateprofile = (e) => {
        e.preventDefault()
        axios.put('http://localhost:4000/user/updateprofile/' + this.getuserpayload()._id, this.state).then(res => {
            alert("success")
        })


    }
    handlePage() {
        this.props.history.push('/')
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    getuserpayload() {
        var token = localStorage.getItem('jwttoken')
        console.log(token + "====")
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    }


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
                                            <img className="imglogo" src={imglogo} alt="" />
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
                <div><br /><br /><br /><br /><br /><br /><br /></div>
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="col-sm-8 mx-auto text-center">
                            <h1 className="text-center">PROFILE</h1>

                            <img style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} src={require("./profile.jpg")} class="rounded-circle" alt="Cinque Terre"></img>
                            <br />
                            <form className="form-container" id="vform" noValidate onSubmit={this.selectImages}>
                                <input type="file" name="myfile" id="vimg" />
                                <button className="btn btn-primary" type="submit">Submit</button>
                                {/* <input type="submit" /> */}
                            </form>                           
                        </div>

                        {/* <table className=" table col-md-6 mx-auto">
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
                        </table> */}<br/><br/><br/><br/>
                        <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4">
                                    <form>
                                        <div>
                                            <label>
                                                <div class="row">
                                                    <div class="col-6">First Name</div>
                                                    <div class="col-6">
                                                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.onChange} />
                                                    </div>
                                                
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <div class="row">
                                                    <div class="col-6">Last Name</div>
                                                    <div class="col-6">
                                                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                                                    </div>
                                                
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <div class="row">
                                                    <div class="col-6">Email</div>
                                                    <div class="col-6">
                                                        <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                                                    </div>
                                                
                                                </div>
                                                
                                            </label>
                                        </div>
                                        {/* <div>
                                            <label>

                                                Address
                                                <input type="text" name="address" value={this.state.address} onChange={this.onChange} />
                                            </label>
                                        </div> */}
                                        {/* <input type="submit" value="Update" onClick={this.updateprofile} /> */}
                                        <button className="btn btn-primary" type="submit" onClick={this.updateprofile}>Update</button>

                                    </form>
                                    <p>supplier Images</p>
                                    {this.showImages()}

                            </div>
                            <div class="col-4"></div>
                        </div>
                       
                        <br></br>

                        
                        {/* <img style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} src={require("./upload/1565782692157.jpg")} class="rounded-circle" alt="Cinque Terre" />
           */}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Profile;
