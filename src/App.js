import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
// import Customer from './component/customer/Customer';

//customer
import Home from './component/customer/Home';
import Vehicle from './component/customer/Vehicle';
import Tailor from './component/customer/Tailor';
import About from './component/customer/About';
import Package from './component/customer/Package';
import SupLogin from './component/supplier/Login';
import SupRegister from './component/supplier/Register';
import CLogin from './component/customer/HLogin';
import CRegister from './component/customer/VRegister';
import HotelBooking from './component/customer/HotelBooking';


//supplier
import SHome from './component/supplier/Home';
import VehicleReg from './component/supplier/VehicleReg';
import HotelReg from './component/supplier/HotelReg';
import Profile from './component/supplier/Profile'
import SRegister from './component/supplier/Register';

//dashboard
import Dashboard from './component/dashboard/Dashboard';
import Bookings from './component/dashboard/Bookings';
import Suppliers from './component/dashboard/Suppliers';
import Customers from './component/dashboard/Customers';


class App extends Component {
  
  render() {
    return (
        <Router>
            <div className="cover-container d-flex h-100  mx-auto flex-column">
            
            <Route path="/" exact component={Home}/>
            <Route path="/vehicle" exact component={Vehicle}/>
            <Route path="/Travel-Packages" exact component={Package}/>
            <Route path="/Tailor-Made-Tour" exact component={Tailor}/>
            <Route path="/About-us" exact component={About}/>
            <Route path="/supplier-login" exact component={SupLogin}/>
            <Route path="/supplier-register" exact component={SupRegister}/>
            <Route path="/login" exact component={CLogin}/>
            <Route path="/register" exact component={CRegister}/>
            <Route path="/hotel/hotelbooking" exact component={HotelBooking}/>

            <Route path="/supplier" exact component={SHome}/>
            <Route path="/supplier/vehiclereg" component={VehicleReg} />
            <Route path="/supplier/hotelreg" component={HotelReg}/>
            <Route path="/supplier/Register" component={SRegister}/>
            <Route path="/supplier/profile" component={Profile} />

            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/bookings" exact component={Bookings} />
            <Route path="/dashboard/suppliers" exact component={Suppliers} />
            <Route path="/dashboard/customers" exact component={Customers} />

          </div>
        </Router>
    );
  }
}

export default App;
