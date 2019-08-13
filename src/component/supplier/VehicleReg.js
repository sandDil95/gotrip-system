import React , {Component} from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from '../customer/Footer'
import axios from 'axios';
import validator from 'validator'

const validatePhoneNumber = number => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
}
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
//const telNum = RegExp(/^[0-9]*$/);
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
    
}

class VehicleReg extends Component{
    constructor(props){
        super(props)
        this.state ={
            vehicleNo : '',
            contactNo  :'',
            beginingDate : '',
            endingDate : '',
            seatsNo:'',
            onlyVehicle : '',
            ppkm : '',
            vehicleModel : '',
            locations : '',
            vehicleImage : '',
            // email : props.location.state.email,
            formErrors:{
                vehicleNo:"",
                // beginingDate:"",
                // endingDate:"",
                // vehicleModel:"",
                // supplier_name:"",
                seatsNo:"",
                // onlyVehicle:"",
                ppkm:"",
                vehicleModel:"",
                locations:"",
                vehicleImage:''
            },
            number:{
                contactNo:""
            }

        }
        this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        // this.logintosupplier = this.logintosupplier.bind(this);
        this.vehiRegister = this.vehiRegister.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }
    handlePage(){
        this.props.history.push('/')
    }

    getuserpayload=()=>{
        var token =localStorage.getItem('jwttoken')
    console.log(token +"====")
    if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
        return null;
    }

   onChange(e){
       const {name , value} = e.target;
       let formErrors = this.state.formErrors;
       let number = this.state.number;
       switch(name){
        case'vehicleNo':
        formErrors.vehicleNo = 
            value.length < 3 
                ? "minimum 3 characaters required"
                :"";
        break;
        case'contactNo':
        number.contactNo = 
            value.length <10 || value.length >10
            ? "Invalid Phone Number"
            :"";
        break;
        case'seatsNo':
        formErrors.seatsNo = 
            value.length > 2 
                ? "Check again number of sheet"
                :"";
        break;
        case'ppkm':
        formErrors.ppkm = 
            value > 300 
                ? "less than 300  rupies"
                :"";
        break;
        case'vehicleModel':
        formErrors.vehicleModel = 
            value.length < 3
                ? "minimum 3 characaters required"
                :"";
        break;
        case'locations':
        formErrors.locations = 
            value.length < 6 
                ? "minimum 10 characaters required"
                :"";
        break;

    default:
    break;
    }
    this.setState({formErrors ,[name]:value},()=>console.log(this.state));
    this.setState({number ,[name]:value} ,()=>console.log(this.state));

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
   vehiRegister(e){
    e.preventDefault();
    if(formValid(this.state.formErrors)|| validatePhoneNumber(this.state.number)){
        console.log(`
             --SUBMITING--
             vehicleNo:${this.state.vehicleNo},
             contactNo:${this.state.contactNo},
             beginingDate:${this.state.beginingDate},
             endingDate:${this.state.endingDate},
             seatsNo:${this.state.seatsNo},
             onlyVehicle:${this.state.onlyVehicle},
             ppkm:${this.state.ppkm},
             vehicleModel:${this.state.vehicleModel},
             locations:${this.state.locations},
             
        `)
    }
    
    else{
        console.error('Form Invalid - Display Error Masage');
    }
    const obj = {
        SID:this.getuserpayload()._id,
        email: this.props.email,
        vehicleNo : this.state.vehicleNo,
        contactNo  :this.state.contactNo,
        beginingDate : this.state.beginingDate,
        endingDate : this.state.endingDate,
        seatsNo:this.state.seatsNo,
        onlyVehicle : this.state.onlyVehicle,
        ppkm : this.state.ppkm,
        vehicleModel : this.state.vehicleModel,
        locations : this.state.locations,
        // vehicleImage : '',
   };
   axios.post( 'http://localhost:4000/vehicle/add/',obj )
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

    render(){
        // const {something} = this.props;
        const {formErrors} = this.state;
        const {number} = this.state;
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
                                                <Link to="/supplier" className="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item active">
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
                <div className ="bg-img">
                    {/* <div className ="container"> */}
                    <div className ="row">
                        <div className ="col-md-6 mt-5 mx-auto">
                            <form className = "form-container" noValidate onSubmit ={this.onSubmit}> 
                                <h1 className ="h3 mb-3 font-weight-normal">Register your vehicle</h1><br/>
                                {/* {this.props.email}<br/> */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type ="text"
                                            className="form-control"
                                            name = "vehicleNo"
                                            placeholder ="Enter first name"
                                            value ={this.state.vehicleNo}
                                            onChange ={this.onChange}
                                            noValidate
                                        />
                                        {formErrors.vehicleNo.length>0 && (
                                            <span className="errorMessage">{formErrors.vehicleNo}</span>
                                        )}
                                    </div>
                                
                                    <div className="col-lg-6">
                                        <input type ="text"
                                            className="form-control"
                                            name = "contactNo"
                                            placeholder ="Enter Contact Number"
                                            value ={this.state.contactNo}
                                            onChange ={this.onChange}
                                            noValidate
                                        />
                                        {number.contactNo.length>0 && (
                                            <span className="errorMessage">{number.contactNo}</span>
                                        )}
                                    </div>
                                </div><br/>
                                <div className="row">
                                    <div className="col-lg-12">
                                        Enter Available Time Period
                                    </div>
                                </div>  <hr/>          
                                <div className="row">
                                            <div className="col-lg-6">
                                                <label htmlFor = "begingdate"><small>Start From</small></label>
                                                <input type="date"
                                                    //placeholder="Begining Date of Availability" 
                                                    className="form-control" 
                                                    name="beginingDate" 
                                                    value={this.state.beginingDate}
                                                    onChange={this.onChange}
                                                />  
                                            </div> 
                                            <div className="col-lg-6">
                                                <label htmlFor = "endingate"><small>To End</small></label>
                                                <input type="date"
                                                    //placeholder="Ending Date of Availability" 
                                                    className="form-control" 
                                                    name="endingDate" 
                                                    
                                                    value={this.state.endingDate}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                </div><br/>
                                <div className ="row">
                                    <div className="col-lg-6">
                                        <label className="radio-inline">
                                            <input type="radio" 
                                                value="driver"
                                                name="onlyVehicle" 
                                                checked={this.state.onlyVehicle === "driver"} 
                                                onChange={this.onChange}
                                                //noValidate
                                            />
                                            With Driver
                                        </label>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="radio-inline">
                                            <input type="radio" 
                                                value="nodriver" 
                                                checked ={this.state.onlyVehicle === "nodriver"}
                                                name="onlyVehicle" 
                                                onChange={this.onChange}
                                                //noValidate
                                            />
                                            WithOut Driver
                                        </label>
                                    </div>
                                </div><br/>
                                <div className ="row">
                                    
                                    <div className="col-lg-6">
                                        {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.sheet_num.length >0 ? "error" :null}
                                                name = "seatsNo"
                                                placeholder ="Enter Number of Seat"
                                                value ={this.state.seatsNo}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        {formErrors.seatsNo.length>0 && (
                                            <span className="errorMessage">{formErrors.seatsNo}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                                name = "ppkm"
                                                placeholder ="Enter Pay per one km"
                                                value ={this.state.ppkm}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        {formErrors.ppkm.length>0 && (
                                            <span className="errorMessage">{formErrors.ppkm}</span>
                                        )}
                                    </div>
                                    
                                </div><br/>
                                <div className ="row">
                                    <div className="col-lg-6">
                                        {/* <label htmlFor = "location">City of Vehicle </label> */}
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.location.length >0 ? "error" :null}
                                                name = "locations"
                                                placeholder ="Enter Locations of vehicle"
                                                value ={this.state.locations}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        {formErrors.locations.length>0 && (
                                            <span className="errorMessage">{formErrors.locations}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        {/* <label htmlFor = "vehicle_model">Vehicle Model </label> */}
                                        <input type ="text"
                                                className="form-control"
                                                //className={formErrors.vehicle_model.length >0 ? "error" :null}
                                                name = "vehicleModel"
                                                placeholder ="Enter the vehicle model"
                                                value ={this.state.vehicleModel}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        {formErrors.vehicleModel.length>0 && (
                                            <span className="errorMessage">{formErrors.vehicleModel}</span>
                                        )}
                                    </div>
                                    
                                </div><br/>

                                <div className ="row">
                                    <label>Vehicle Image : </label>
                                    <div className="col-lg-6">
                                        {/* <label htmlFor = "vehicle_model">Vehicle Model </label> */}
                                        <input type ="file"
                                                className="form-control"
                                                //className={formErrors.vehicle_model.length >0 ? "error" :null}
                                                name = "vehicleImage"
                                                placeholder ="Choose Vehicle Photo"
                                                value ={this.state.vehicleImage}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        {formErrors.vehicleImage.length>0 && (
                                            <span className="errorMessage">{formErrors.vehicleImage}</span>
                                        )}
                                    </div>
                                    
                                </div><br/>
                                {/* <button onClick = {this.fileUploadedHandler} type ="submit" className ="btn btn-primary btn--block">
                                        Register
                                </button>
                                <p>Are you already Signup? */}
                                    <button onClick = {this.vehiRegister} type ="submit" className ="btn btn-primary btn--block">
                                            Register
                                    </button>
                                {/* </p> */}
                            </form>
                            
                        </div>
                    </div>
            {/* </div> */}
                </div>
                <br/><br/><br/><br/>
                <Footer/>
            </div>

        )
    }
}



export default VehicleReg;

