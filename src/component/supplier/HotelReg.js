import React , {Component} from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from './Footer';
import axios from 'axios';

class HotelReg extends Component{
    constructor(props){
        super(props)
        this.state ={
            hotelName : '',
            contactNo  :'',
            address : '',
            place : '',
            hotelType : '',
            single_room_num:'',
            single_room_payment:'',
            double_room_num : '',
            double_room_payment : '',
            triple_room_num : '',
            triple_room_payment : '',
            quad_room_num : '',
            quad_room_payment : '',
            hotelImage : '',
        }
        this.onChange = this.onChange.bind(this);
        this.hotelRegister = this.hotelRegister.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }
    handlePage(){
        this.props.history.push('/')
    }

   onChange(e){
       this.setState({[e.target.name]:e.target.value})
   }
//    onSubmit(e){
//        e.preventDefault()

//        const user ={
//            vehicleNo:this.state.vehicleNo,
//            contactNo:this.state.contactNo,
//            beginingDate:this.state.beginingDate,
//            endingDate:this.state.endingDate,
//            seatsNo:this.state.seatsNo,
//            onlyVehicle : this.state.onlyVehicle,
//            ppkm : this.state.ppkm,
//            vehicleModel : this.state.vehicleModel,
//            locations : this.state.locations,
//            vehicleImage : this.state.vehicleImage,
//         //    selectedFile:this.state.selectedFile
//        }
//        register(user).then(res => {
           
//                this.props.history.push('/supplier-login')
           
//        })
//    }
   hotelRegister(e){
    e.preventDefault();
    console.log(this.state.email);
    const obj = {
        email: this.props.email,
        hotelName : this.state.hotelName,
        contactNo  :this.state.contactNo,
        address : this.state.address,
        place : this.state.place,
        hotelType : this.state.hotelType,
        single_room_num:this.state.single_room_num,
        single_room_payment:this.state.single_room_payment,
        double_room_num : this.state.double_room_num,
        double_room_payment : this.state.double_room_payment,
        triple_room_num : this.state.triple_room_num,
        triple_room_payment : this.state.triple_room_payment,
        quad_room_num : this.state.quad_room_num,
        quad_room_payment : this.state.quad_room_payment,
        // vehicleImage : '',
   };
   axios.post( 'http://localhost:4000/hotel/add/',obj )
       .then(res => {
                if(res){
                    alert("added successfully")
                    // this.props.history.push('/supplier')
                }else{
                    alert("failed")
                }
            })
   }
   componentDidMount(){
    console.log(this.props.email);
   }   
//    logintosupplier(e){
//      this.props.history.push('/supplier-login')
//    }
//    state={
//        selectedFile:null
//    }
//    fileSelectedHandler = event =>{
//        this.setState({
//            selectedFile:event.target.files[0]
//        })
//    }
//    fileUploadedHandler = () =>{
//         axios.post('http://');
//    }

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
                                            <li className="nav-item active">
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
                <div className ="bg-img">
                    {/* <div className ="container"> */}
                    <div className ="row">
                        <div className ="col-md-6 mt-5 mx-auto">
                            <form className = "form-container" onSubmit ={this.onSubmit}> 
                                
                                <h1 className ="h3 mb-3 font-weight-normal">Register your Accomadation</h1><br/>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type ="text"
                                            className="form-control"
                                            name = "hotelName"
                                            placeholder ="Enter hotel name"
                                            value ={this.state.hotelName}
                                            onChange ={this.onChange}
                                    
                                        />
                                    </div>
                                
                                    <div className="col-lg-6">
                                        <input type ="text"
                                            className="form-control"
                                            name = "contactNo"
                                            placeholder ="Enter Contact Number"
                                            value ={this.state.contactNo}
                                            onChange ={this.onChange}
                                    
                                        />
                                    </div>
                                </div><br/>
                                <input type ="text"
                                    className="form-control"
                                    name = "address"
                                    placeholder ="Enter Address"
                                    value ={this.state.address}
                                    onChange ={this.onChange}
                            
                                /><br/>
                                <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text"
                                                    //placeholder="Begining Date of Availability" 
                                                    className="form-control" 
                                                    name="place" 
                                                    placeholder ="Nearby City"
                                                    value={this.state.place}
                                                    onChange={this.onChange}
                                                />  
                                            </div> 
                                            <div className="col-lg-6">
                                                <select className="form-control" 
                                                    name="hotelType" 
                                                    value={this.state.hotelType} 
                                                    onChange={this.onChange}>
                                                        <option>One Star </option>
                                                        <option>Two Star</option>
                                                        <option>Three Star</option>
                                                        <option>Four Star</option>
                                                        <option>Five Star</option>
                                                        <option>Luxury</option>
                                                        <option>Villas</option>
                                                        <option>Resort</option>
                                                    
                                                </select>
                                            </div>
                                </div><br/>
                
                                <div className ="row">
                                    <div className="col-lg-12">
                                        Enter your Hotel Rooms Details
                                    </div>    
                                </div>    <hr/>
                                <div className ="row">
                                    <div className="col-lg-4">
                                        Single Bed Rooms
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "single_room_num"
                                                placeholder ="Number of Rooms"
                                                value ={this.state.single_room_num}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "single_room_payment"
                                                placeholder ="Payment Per Room"
                                                value ={this.state.single_room_payment}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                </div><br/>
                                <div className ="row">
                                    <div className="col-lg-4">
                                        Double Bed Rooms
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "double_room_num"
                                                placeholder ="Number of Rooms"
                                                value ={this.state.double_room_num}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "double_room_payment"
                                                placeholder ="Payment Per Room"
                                                value ={this.state.double_room_payment}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                </div><br/>
                                <div className ="row">
                                    <div className="col-lg-4">
                                        Triple Bed Rooms
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "triple_room_num"
                                                placeholder ="Number of Rooms"
                                                value ={this.state.triple_room_num}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "triple_room_payment"
                                                placeholder ="Payment Per Room"
                                                value ={this.state.triple_room_payment}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                </div><br/>
                                <div className ="row">
                                    <div className="col-lg-4">
                                        Quad Bed Rooms
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "double_room_num"
                                                placeholder ="Number of Rooms"
                                                value ={this.state.quade_room_num}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                    <div className="col-lg-4">
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "double_room_payment"
                                                placeholder ="Payment Per Room"
                                                value ={this.state.quade_room_payment}
                                                onChange ={this.onChange}
                                                //noValidate
                                        />
                                        {/* {formErrors.pay_per_onekm.length>0 && (
                                            <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                        )} */}
                                    </div>
                                </div><br/>
                                
                                {/* <button onClick = {this.fileUploadedHandler} type ="submit" className ="btn btn-primary btn--block">
                                        Register
                                </button>
                                <p>Are you already Signup? */}
                                    <button onClick = {this.hotelRegister} type ="submit" className ="btn btn-primary btn--block">
                                            Register
                                    </button>
                                {/* </p> */}
                            </form>
                            
                        </div>
                    </div>
            {/* </div> */}
                </div><br/><br/><br/><br/>
                <Footer/>
            </div>    


        )
    }
}



export default HotelReg;

