import React, { Component } from 'react';
import './css/dashboard.css';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";


class Bookings extends Component {
  render() {
    return (
        <div>
            <div class="sidenav"><br/>
                <Link to="/dashboard">Dashboard</Link><br/>
                <Link to="/dashboard/bookings"  className="nav-item active">Bookings</Link><br/>
                <Link to="/dashboard/suppliers">Suppliers</Link><br/>
                <Link to="/dashboard/customers">Customers</Link><br/>
            </div>

            <div class="main"><br/>
                <h2>Bookings</h2>
                <p>This sidebar is of full height (100%) and always shown.</p>
                <p>Scroll down the page to see the result.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            </div>
        </div>
    );
  }
}

export default Bookings;
