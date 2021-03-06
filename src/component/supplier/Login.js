import React , {Component} from 'react';
import './css/Login.css';
import validator from 'validator'
import {loginVehicle} from './UserFunctions';
import {loginHotel} from './UserFunctions';
import {login} from './UserFunctions';
//import {login} from './UserFunctions';
const axios = require('axios');

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
//const telNum = RegExp(/^[0-9]*$/);
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
    
}

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
            formErrors:{
                email:"",
                password:"",
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.registertosupplier = this.registertosupplier.bind(this);
    }
   onChange(e){
    const {name , value} = e.target;
    let formErrors = this.state.formErrors;

    switch(name){
         case'email':
             formErrors.email = 
             emailRegex.test(value)
                 ? ''
                 :"Invalid Email Address";
         break;  
         case'password':
             formErrors.password = 
                 value.length < 6
                     ? "minimum 6 characaters required"
                     :"";
             break;
         default:
         break;

    }
    this.setState({formErrors ,[name]:value},()=>console.log(this.state));
   }
   onSubmit(e){
       e.preventDefault();
       if(formValid(this.state.formErrors)){
        console.log(`
             --SUBMITING--
             email:${this.state.email},
             password:${this.state.password}
        `)
    }
    
    else{
        console.error('Form Invalid - Display Error Masage');
    }
       const obj = {
        email:this.state.email,
        password:this.state.password
      };
      axios.post('http://localhost:4000/user/login/',obj)
          .then(res => {
              console.log(res.data)
            //   alert(JSON.stringify(res))
                   if(res){
                    localStorage.setItem('jwttoken',res.data.token)
                    this.props.history.push({
                        pathname: '/supplier',
                        state: { email:this.state.email }
                    })
                    //    this.props.history.push('/supplier');
                   }
               })
   }
   registertosupplier(e){
       this.props.history.push('/supplier-register')

   }
    render(){
        const {formErrors} = this.state;
        return(
            <div className ="bg-img">

                {/* <div className ="container"> */}

                <div className ="sup-inner">

                    <div className ="row">
                        <div className ="col-md-6 mt-5 mx-auto">
                            <form className = "form-container" noValidate onSubmit ={this.onSubmit}> 
                                
                                <h1 className ="h3 mb-3 font-weight-normal">Sign in Form</h1>
                                <div className ="form-group">
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
                                <div className ="form-group">
                                    <input type ="password"
                                            className="form-control"
                                            name = "password"
                                            placeholder ="Enter Password "
                                            value ={this.state.password}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                     {formErrors.password.length>0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>
                                
                                <button type ="submit" className ="btn btn-primary btn--block">
                                        Sign in
                                </button>
                                <p>Not yet signup?
                                    <button onClick = {this.registertosupplier} type ="submit" className ="btn btn-primary btn--block">
                                            Sign Up
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            
            
        )
    }
}

export default Login;