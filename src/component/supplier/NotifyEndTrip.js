import React , {Component} from 'react';
//import './css/Notification.css';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import Footer from '../customer/Footer';
import axios from 'axios';
//import {sendEmail} from './UserFunctions';
import validator from 'validator';


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

class Notify extends Component{
    constructor(){
        super()
        this.state ={
            // first_name:'',
            // last_name:'',
            email:'',
            supplier_name:'',
            vehicleNo:'',
            begingdate:'',
            endingdate:'',
            travled_place:'',
            total_distanse:'',
            //distanse_ammount:'',
            guide_fee:'',
            //parcking_fee:'',
            //entry_ticket:'',
            //highway_ticket:'',
            other_fee:'',
            //total_ammount:'',
            formErrors:{
                email:"",
                supplier_name:"",
                vehicleNo:"",
                //beginingDate:"",
                //endingDate:"",
                travled_place:"",
                total_distanse:"",
                guide_fee:"",
                other_fee:"",
                // vehicleModel:"",
                
                // seatsNo:"",
                // onlyVehicle:"",
                // ppkm:"",
                // vehicleModel:"",
                // locations:"",
                // vehicleImage:''
            }
            // number:{
            //     contactNo:""
            // }

            
            
            
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.handlePage = this.handlePage.bind(this);
        console.log(this.getuserpayload())
    
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
    componentDidMount(){
        console.log(this.getuserpayload())
       this.setState({SID:this.getuserpayload()})
    }
    handlePage(){
        this.props.history.push('/')
    }

   onChange(e){
       //this.setState({[e.target.name]:e.target.value});
       const {name , value} = e.target;
       let formErrors = this.state.formErrors;
       let number = this.state.number;

       //console.log("Name :" , name);
       //console.log("value :" ,value);
       switch(name){
                case'email':
                formErrors.email = 
                    emailRegex.test(value)
                        ? ''
                        :"Invalid Email Address";
                break;
                
                case'supplier_name':
                formErrors.supplier_name = 
                    value.length < 3
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'vehicleNo':
                formErrors.vehicleNo = 
                    value.length < 3
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'travled_place':
                formErrors.travled_place = 
                    value.length < 3
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'total_distanse':
                formErrors.total_distanse = 
                    value.length < 3
                        ? "minimum 3 number required"
                        :"";
                break;
                case'guide_fee':
                formErrors.guide_fee = 
                    value.length < 3
                        ? "minimum 3 number required"
                        :"";
                break;
                case'other_fee':
                formErrors.other_fee = 
                    value.length < 3
                        ? "minimum 3 number required"
                        :"";
                break;
                // case'contactNo':
                // telNum.contactNo = 
                //     value
                //     ? "Invalid Phone Number"
                //     :"";
                // break;
                // case'contactNo':
                // number.contactNo = 
                //     value.length <10 || value.length >10
                //     ? "Invalid Phone Number"
                //     :"";
                // break;
                
            default:
            break;
       }
       this.setState({formErrors ,[name]:value},()=>console.log(this.state));
       this.setState({number ,[name]:value} ,()=>console.log(this.state));
   }
   onSubmit(e){
       e.preventDefault()
       console.log("Succesfuly"); 
       if(formValid(this.state.formErrors)|| validatePhoneNumber(this.state.number)){
           console.log(`
                --SUBMITING--
                
                
                email:${this.state.email},
                supplier_name:${this.state.supplier_name},
                vehicleNo:${this.state.vehicleNo},
                begingdate:${this.state.begingdate},
                endingdate:${this.state.endingdate},
                travled_place:${this.state.travled_place},
                total_distanse:${this.state.total_distanse},
                guide_fee:${this.state.guide_fee},
                other_fee:${this.state.other_fee},

                
           `)
       }
       
       else{
           console.error('Form Invalid - Display Error Masage');
       }
       const obj ={
        //    first_name:this.state.first_name,
        //    last_name:this.state.last_name,
           SID:this.getuserpayload()._id,
           email:this.state.email,
           supplier_name:this.state.supplier_name,
           vehicleNo:this.state.vehicleNo,
           begingdate:this.state.begingdate,
           endingdate:this.state.endingdate,
           travled_place:this.state.travled_place,
           total_distanse:this.state.total_distanse,
           //distanse_ammount:this.state.distanse_ammount,
           guide_fee:this.state.guide_fee,
           //parcking_fee:this.state.parcking_fee,
           //entry_ticket:this.state.entry_ticket,
           //highway_ticket:this.state.highway_ticket,
           other_fee:this.state.other_fee
           
           
           
       
       };
       axios.post( 'http://localhost:4000/sendNotify/send/',obj )
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
    //    console.log("Succesfuly"); 
    //    sendEmail(SendNotification).then(res => {
    //             if(SendNotification){
    //                 this.props.history.push('/supplier/send-email')
    //             }
               
           
    //    })
   //}


    render(){
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
                <div><br/><br/><br/><br/><br/><br/><br/></div>
            <div className ="bg-img">
             
                <div className ="row">
                
                    <div className ="col-md-6 mt-5 mx-auto">
                    
                        <form  className = "form-container" noValidate onSubmit ={this.onSubmit} > 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Send Notify About End Trip</h1>
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "first_name">First Name</label> */}
                                    <input type ="email"
                                        className="form-control"
                                        name = "email"
                                        placeholder ="Enter Email Address"
                                        value ={this.state.email}
                                        onChange ={this.onChange}
                                        noValidate
                                
                                />
                                 {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "last_name">Last Name </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.last_name.length >0 ? "error" :null}
                                            name = "vehicleNo"
                                            placeholder ="Enter Vehicle Number"
                                            value ={this.state.vehicleNo}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.vehicleNo.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicleNo}</span>
                                    )}
                                </div>
                        
                            </div>
                            
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "supplier_name"
                                            placeholder ="Enter Supplier Name"
                                            value ={this.state.supplier_name}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.supplier_name.length>0 && (
                                        <span className="errorMessage">{formErrors.supplier_name}</span>
                                    )}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "vehicle_no"
                                            placeholder ="Enter Vehicle Number"
                                            value ={this.state.vehicle_no}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {/* {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )} */}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "total_distanse"
                                            placeholder ="Enter Total Distanse"
                                            value ={this.state.total_distanse}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.total_distanse.length>0 && (
                                        <span className="errorMessage">{formErrors.total_distanse}</span>
                                    )}
                                </div>
                            </div><br/>
                            <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor = "begingdate">Begining Date</label>
                                            <input type="date"
                                                   //placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="begingdate" 
                                                   value={this.state.begingdate}
                                                   onChange={this.onChange}
                                            />  
                                        </div> 
                                        <div className="col-lg-6">
                                            <label htmlFor = "endingdate">Ending Date</label>
                                            <input type="date"
                                                   //placeholder="Ending Date of Availability" 
                                                   className="form-control" 
                                                   name="endingdate" 
                                                   
                                                   value={this.state.endingdate}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                            </div><br/>
                            <div className ="row">
                                <div className ="col-lg-12">
                                    {/* <label htmlFor = "address">Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.address.length >0 ? "error" :null}
                                            name = "travled_place"
                                            placeholder ="Enter Travled Place"
                                            value ={this.state.travled_place}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.travled_place.length>0 && (
                                        <span className="errorMessage">{formErrors.travled_place}</span>
                                    )}
                                </div>
                            </div><br/>
                           
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "guide_fee"
                                            placeholder ="Enter Total Guide Fee"
                                            value ={this.state.guide_fee}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.guide_fee.length>0 && (
                                        <span className="errorMessage">{formErrors.guide_fee}</span>
                                    )}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "other_fee"
                                            placeholder ="Enter Other Fee"
                                            value ={this.state.other_fee}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {number.other_fee.length>0 && (
                                        <span className="errorMessage">{number.other_fee}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            
                            
                            
                            <div className ="row">
                                <div className="col-lg-12">
                                        <button  type ="submit" onClick = {this.onsubmit} className ="btn btn-lg btn-primary btn--block">
                                            Send
                                        </button>
                                        
                                </div>
                            </div>
                            
                           

                            
                            
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



export default Notify;

