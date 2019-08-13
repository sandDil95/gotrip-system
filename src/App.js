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

import HLogin from './component/customer/HLogin';
import HRegister from './component/customer/HRegister';
import Login from './component/customer/Login';
import Register from './component/customer/Register';
import VLogin from './component/customer/VLogin';
import VRegister from './component/customer/VRegister';
import HotelBooking from './component/customer/HotelBooking';
import VehicleBooking from './component/customer/VehicleBooking';

import whale_watching from './component/customer/whale_watching';
import Udawalawa from './component/customer/Udawalawa';
import Galle from './component/customer/galle';
import classic from './component/customer/classic';
import tour from './component/customer/tour';
import wilpaththu from './component/customer/wilpaththu';
import package_booking from './component/customer/package_booking';
//supplier

//logged customer
import LogHome from './component/logcustomer/Home';
import DupLogHome from './component/logcustomer/DupHome';
import LogVehicle from './component/logcustomer/Vehicle';
import LogTailor from './component/logcustomer/Tailor';
import LogAbout from './component/logcustomer/About';
import LogPackage from './component/logcustomer/Package';
import LogHotelBooking from './component/logcustomer/HotelBooking';
import LogVehicleBooking from './component/logcustomer/VehicleBooking';

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

            <Route path="/whale_watching" exact component={whale_watching}/>
            <Route path="/Udawalawa" exact component={Udawalawa}/>
            <Route path="/Galle" exact component={Galle}/>
            <Route path="/classic" exact component={classic}/>
            <Route path="/tour" exact component={tour}/>
            <Route path="/wilpaththu" exact component={wilpaththu}/>
            <Route path="/package_booking" exact component={package_booking }/>
      
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/hlogin" exact component={HLogin}/>
            <Route path="/hregister" exact component={HRegister}/>
            <Route path="/vlogin" exact component={VLogin}/>
            <Route path="/vregister" exact component={VRegister}/>
            <Route path="/hotel/hotelbooking" exact component={HotelBooking}/>
            <Route path="/vehicle/vehiclebooking" exact component={VehicleBooking}/>

            <Route path="/logged" exact component={LogHome}/>
            <Route path="/duplogged" exact component={DupLogHome}/>
            <Route path="/logged/vehicle" exact component={LogVehicle}/>
            <Route path="/logged/Travel-Packages" exact component={LogPackage}/>
            <Route path="/logged/Tailor-Made-Tour" exact component={LogTailor}/>
            <Route path="/logged/About-us" exact component={LogAbout}/>
            <Route path="/logged/hotel/hotelbooking" exact component={LogHotelBooking}/>
            <Route path="/logged/vehicle/vehiclebooking" exact component={LogVehicleBooking}/>

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
