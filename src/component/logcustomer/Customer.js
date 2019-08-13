import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './Home';
import Vehicle from './Vehicle';
import Tailor from './Tailor';
import About from './About';
import Package from './Package';
import SupLogin from '../supplier/Login';
import SupRegister from '../supplier/Register';

class Customer extends Component {
  render() {
    return (
        <Router>
        <div className=" d-flex h-100 flex-column">
            <section>
                <Route path="/" exact component={Home}/>
                <Route path="/vehicle" exact component={Vehicle}/>
                <Route path="/Travel-Packages" exact component={Package}/>
                <Route path="/Tailor-Made-Tour" exact component={Tailor}/>
                <Route path="/About-us" exact component={About}/>
                <Route path="/supplier-login" exact component={SupLogin}/>
                <Route path="/supplier-register" exact component={SupRegister}/>
            </section>
        </div>
    </Router>
    );
  }
}

export default Customer;
