import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import './css/Header.css';
// import Header from './Header';
import Footer from './Footer';
import './css/Vehicle.css';
import axios from 'axios';
// import img1 from '../../assets/images/room_1.jpg';
import img2 from '../../assets/images/intro.jpg';
import img3 from '../../assets/images/quote.png';
import img4 from '../../assets/images/author_1.jpg';
import img5 from '../../assets/images/icon_1.svg';
import img6 from '../../assets/images/icon_2.svg';
import img7 from '../../assets/images/icon_3.svg';
import img8 from '../../assets/images/placeholder.png';
import img9 from '../../assets/images/smartphone.png';
import img10 from '../../assets/images/mail.png';

class Vehicle extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:props.location.email,
            picklocation : '',
            droplocation : '',
            size : '',
            avatar : '',
            checked : false,
            start: new Date(),
            end: new Date(),
            vehicleId : '',
            day: '',
            month: '',
            year: '',
            current: '',
            currentplus: '',
            currentdate: new Date().toLocaleString()
        }
        this.onChange = this.onChange.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bookVehicle = this.bookVehicle.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.vehicleBook = this.vehicleBook.bind(this);
    }
    getDate() {
        const now = new Date();
        
        if(this.state.month<10){
            // eslint-disable-next-line
            this.state.current = now.getFullYear()+'-0'+(now.getMonth()+1)+"-"+now.getDate();
            // eslint-disable-next-line
            this.state.currentplus = now.getFullYear()+'-0'+(now.getMonth()+1)+"-"+(now.getDate()+1);
        }else{
            // eslint-disable-next-line
            this.state.current = now.getFullYear()+'-'+(now.getMonth()+1)+"-"+now.getDate();
            // eslint-disable-next-line
            this.state.currentplus = now.getFullYear()+'-'+(now.getMonth()+1)+"-"+(now.getDate()+1);
        }
        console.log(this.state.current);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount() {
        this.getDate();
    }

    onSubmit(e){ //search button click
        e.preventDefault();
        console.log("hjnkjkn");
        // if(this.state.picklocation === this.state.droplocation){
        //     const searchDetails = {
        //         picklocation : this.state.picklocation,
        //         droplocation : this.state.picklocation,
        //         from : this.state.from,
        //         to : this.state.to,
        //         size: this.state.size,
        //     }
        //     console.log(this.state.droplocation);
        //     console.log(searchDetails);
        //     this.vehicleBook();
        // }else{
            const searchDetails = {
                picklocation : this.state.picklocation,
                droplocation : this.state.droplocation,
                from : this.state.start,
                to : this.state.end,
                size: this.state.size,
            }
            console.log(this.state.droplocation);
            console.log(searchDetails);
            this.vehicleBook();
        // }
    }

    bookVehicle(e){ //click booking vehicle
        const val = e.target.value;
        console.log(val);
        // if(this.state.picklocation !== this.state.droplocation){
        //     console.log("if")
        //     this.props.history.push({
        //         pathname: '/login',
        //         state: { vehicleId:val, picklocation:this.state.picklocation, droplocation:this.state.picklocation, size:this.state.size, start:this.state.start, end:this.state.end }
        //     })
        // }else{
            this.props.history.push({
                pathname: '/logged/vehicle/vehiclebooking',
                state: {
                    vehicleId:this.state.vehicleId,
                    picklocation:this.state.picklocation,
                    droplocation:this.state.droplocation,
                    email:this.state.email,
                    start:this.state.start,
                    end: this.state.end,
                }
            })
        // }           
    }
    myFunction() {
        this.setState({
            checked: !this.state.checked
        })
    }

    vehicleBook(){
        console.log(this.state.size);
        // axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation+'/'+this.state.start+'/'+this.state.end) //check vehicle only or vehicle with driver
        axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation) //check vehicle only or vehicle with driver
        .then(response => {
            console.log("didmount")
            let vehicles = response.data.map((vehicle) => {
                // this.setState({vehicleId : vehicle._id}) //get selected vehicle id to send vehicle booking page
                // console.log(this.state.vehicleId+"response");
                return (
                    <div key={vehicle._id}>
                        <div className="card d-block" id="vehiclecard">
                            <div class="row">
                                <div className="col-lg-8">
                                    <div className="card d-block">
                                        <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-body" id="detailsvehi">
                                        <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
                                        <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
                                        <span> Location: <span>{vehicle.locations}</span></span><br/>
                                        {/* <Link to="/customer/vehiclebooking"><button>Book Now</button></Link> */}
                                        {/* <button type ="submit" className="btn btn-primary" onClick={(e) => {this.bookVehicle(e, vehicle._id)}}>Book Now</button> */}
                                        <button className="btn btn-primary" value={vehicle._id} onClick={(e) => {this.bookVehicle(e)}}>Book Now</button>
                                        {/* <p class="card-text"></p> */}
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                )
            },error=>{
                alert("Not found")
            })
            this.setState({ vehicles : vehicles });
            console.log("state",vehicles)
            // this.setState({ booking:response.data })
        })
        .catch(function(error){
            console.log("error");
        })
    }
    handlePage(){
        this.props.history.push('/supplier-login')
    }

  render() {
    // const content = this.state.checked ? <div className ="form-group">
    //                                                 <input placeholder="Drop-off Location" className="form-control" name="droplocation" onChange={this.onChange} type="text" value={this.state.droplocation}/><br/>
    //                                          </div> : null;
    return (
        <div>
                <header class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="header_content d-flex flex-row align-items-center justify-content-start">
                                    <Link to="/" className="nav-link">
                                        <div class="logo">
                                            {/* <a href="#"> */}
                                                <img className="imglogo" src={imglogo} alt=""/>
                                            {/* </a> */}
                                        </div>
                                    </Link>

                                    <nav class="main_nav">
                                        <ul class="d-flex flex-row align-items-center justify-content-start">
                                            <li>
                                                <Link to="/" className="nav-link">Accomadations</Link>
                                            </li>
                                            <li className="nav-item active">
                                                <Link to="/vehicle" className="nav-link">Vehicles</Link>
                                            </li>
                                            <li>
                                                <Link to="/Travel-Packages" className="nav-link">Travel-Packages</Link>
                                            </li>
                                            <li >
                                                <Link to="/Tailor-Made-Tour" className="nav-link">Tailor-Made Tour</Link>
                                            </li>
                                            <li>
                                                <Link to="/About-us" className="nav-link">About Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div class="header_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                                        <div class="book_button trans_200">
                                            <a onClick={this.handlePage}>Supplier</a>
                                        </div>
                                    </div>
                                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div id="contentbody">
                    <div id="content-bodyy-vehi" className="card">
                    {/* Menu */}                        
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <div class="home">
                        {/* <div class="parallax_background parallax-window" data-parallax="scroll" data-speed="0.8">
                            <img src={img1} />
                        </div> */}
                        <div class="home_container">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="home_content text-center">
                                            <div class="home_title"><h1>Luxury & Comfort</h1></div>
                                            <div class="home_text">Find your ideal Vehicle to travel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search_box"><br/><br/><br/><br/></div>
                    <div class="search_box">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="search_box_container d-flex flex-row align-items-center justify-content-start">
                                        <div class="search_form_container">
                                            <form id="accomadtn" className = "form-container" onSubmit={this.onSubmit}> 
                                                <div class="d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                                    <ul class="search_form_list d-flex flex-row align-items-center justify-content-start flex-wrap">
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input placeholder="Pick-up Location" className="form-control" name="picklocation" onChange={this.onChange} type="text" value={this.state.picklocation}/>
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input placeholder="Drop-off Location" className="form-control" name="droplocation" onChange={this.onChange} type="text" value={this.state.droplocation}/><br/>
                                                        </li><br/>
                                                        {/* {content} */}
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input type="date" className="form-control" name="start" onChange={this.onChange} value={this.state.start} min={this.state.current}/>
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input type="date" className="form-control" name="end" onChange={this.onChange} value={this.state.end} min={this.state.currentplus}/>
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <select name="size" onChange={this.onChange}>
                                                                <option value="driver">Vehicle with Driver</option>
                                                                <option value="nodriver">Vehicle Only</option>
                                                            </select>                                                        
                                                        </li>
                                                    </ul>
                                                    <button type="submit" class="search_button">search</button>                                                
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <br/><br/><br/><br/><br/>
                                {this.state.vehicles}
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div><br/><br/>
                        

                    <div class="intro">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="section_title_container text-center">
                                        <div class="section_title"><h1>Beach Hotel- More than a stay</h1></div>
                                        <div class="section_text">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</div>
                                    </div><br/>
                                </div>
                            </div>
                            <div class="row intro_row">
                                <div class="col-lg-6">
                                    <div class="intro_image"><img src={img2} id="sideimg"/></div>
                                </div>
                                <div class="col-lg-6 intro_col">
                                    <div class="intro_content">
                                        <div class="quote"><img src={img3} alt=""/></div>
                                        <div class="intro_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus hendrerit, id lobortis leo luctus nec.</p>
                                        </div><br/><br/>
                                        <div class="intro_author d-flex flex-row align-items-center justify-content-start">
                                            <div class="author_image"><img src={img4} alt="https://unsplash.com/@onurozkardes"/></div>
                                            <div class="intro_author_content">
                                                <div class="intro_author_name">Michael Williams</div>
                                                <div class="intro_author_title">client</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rooms */}
                    <div class="room d-flex flex-lg-row flex-column align-items-start justify-content-start">
                        <div class="room_content">
                            {/* <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="room_title">
                                            <div class="section_title_container_2">
                                                <div class="section_title"><h1>Deluxe Room</h1></div>
                                            </div>
                                            <div class="room_price">From <span>$190</span>/ night</div>
                                        </div>
                                        <div class="room_list">
                                            <ul>
                                                <li class="d-flex flex-row align-items-start justify-content-start">
                                                    <div><div>Bed:</div></div>
                                                    <div>Double bed</div>
                                                </li>
                                                <li class="d-flex flex-row align-items-start justify-content-start">
                                                    <div><div>Capacity:</div></div>
                                                    <div>2 adults</div>
                                                </li>
                                                <li class="d-flex flex-row align-items-start justify-content-start">
                                                    <div><div>Room size:</div></div>
                                                    <div>55m²</div>
                                                </li>
                                                <li class="d-flex flex-row align-items-start justify-content-start">
                                                    <div><div>View:</div></div>
                                                    <div>Sea view</div>
                                                </li>
                                                <li class="d-flex flex-row align-items-start justify-content-start">
                                                    <div><div>Facilities:</div></div>
                                                    <div>Iron, TV, Hair dryer</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="button room_button trans_200"><a href="#">book now</a></div>
                                    </div>
                                </div>
                            </div>		 */}
                        </div>
                        <div class="room_image">
                            <div class="background_image" id="jpg2"></div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                    <div class="facilities">
                        <div class="container">
                            <div class="row icon_box_row">

                                {/* Icon Box */}
                                <div class="col-lg-4">
                                    <div class="icon_box text-center">
                                        <div class="icon_box_icon"><img id="x" src={img5} alt=""/></div>
                                        <div class="icon_box_title"><h2>Beautiful Rooms</h2></div>
                                        <div class="icon_box_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Icon Box */}
                                <div class="col-lg-4">
                                    <div class="icon_box text-center">
                                        <div class="icon_box_icon"><img id="x" src={img6} alt=""/></div>
                                        <div class="icon_box_title"><h2>Swimming Pool</h2></div>
                                        <div class="icon_box_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Icon Box */}
                                <div class="col-lg-4">
                                    <div class="icon_box text-center">
                                        <div class="icon_box_icon"><img id="x" src={img7} alt=""/></div>
                                        <div class="icon_box_title"><h2>Luxury Resort</h2></div>
                                        <div class="icon_box_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Gallery */}

                    <div class="gallery">
                        <div class="gallery_slider_container">

                            {/* Gallery Slider */}
                            <div class="owl-carousel owl-theme gallery_slider">
                                
                                {/* Slide  */}
                                <div class="owl-item gallery_item">
                                    <a class="colorbox" href="images/gallery_1.jpg">
                                        <div class="background_image" id="jpg3"></div>
                                    </a>
                                    <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                </div>

                                {/* Slide  */}
                                <div class="owl-item gallery_item">
                                    <a class="colorbox" href="images/gallery_2.jpg">
                                        <div class="background_image" id="jpg4"></div>
                                    </a>
                                    <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                </div>

                                {/* Slide  */}
                                <div class="owl-item gallery_item">
                                    <a class="colorbox" href="images/gallery_3.jpg">
                                        <div class="background_image" id="jpg5"></div>
                                    </a>
                                    <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                </div>

                                {/* Slide  */}
                                <div class="owl-item gallery_item">
                                    <a class="colorbox" href="images/gallery_4.jpg">
                                        <div class="background_image" id="jpg6"></div>
                                    </a>
                                    <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                </div>

                                {/* Slide  */}
                                <div class="owl-item gallery_item">
                                    <a class="colorbox" href="images/gallery_5.jpg">
                                        <div class="background_image" id="jpg7"></div>
                                    </a>
                                    <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                </div>

                            </div>
                        </div>
                    </div>

                        {/* Newsletter */}

                        <div class="newsletter">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="section_title_container_2">
                                            <div class="section_title"><h1>Our Newsletter</h1></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row newsletter_row">
                                    
                                    {/* Newsletter Content */}
                                    <div class="col-lg-6">
                                        <div class="newsletter_content">
                                            <div class="newsletter_text">
                                                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Newsletter Form */}
                                    <div class="col-lg-6 newsletter_col">
                                        <form action="#" class="newsletter_form" id="newsletter_form">
                                            <input type="email" class="newsletter_input" placeholder="Your email" required="required"/>
                                            <button class="newsletter_button">subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}

                        <div class="contact">
                            <div class="container">
                                <div class="row">
                                    
                                    {/* Contact Map */}
                                    <div class="col-xl-6">
                                        <div class="contact_map_container">
                                            
                                            {/* Contact Map */}
                                            <div class="contact_map">

                                                {/* Google Map */}
                                                <div class="map">
                                                    <div id="google_map" class="google_map">
                                                        <div class="map_container">
                                                            <div id="map"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Contact Info Box */}
                                            <div class="contact_info_box d-flex flex-column align-items-center justify-content-center">
                                                <ul class="contact_info_list">
                                                    <li class="d-flex flex-row align-items-start justify-content-start">
                                                        <div><div class="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src={img8} alt=""/></div></div>
                                                        <div class="contact_info_text">1481 Creekside Lane Avila Beach, CA 931</div>
                                                    </li>
                                                    <li class="d-flex flex-row align-items-center justify-content-start">
                                                        <div><div class="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src={img9} alt=""/></div></div>
                                                        <div class="contact_info_text">+53 345 7953 32453</div>
                                                    </li>
                                                    <li class="d-flex flex-row align-items-center justify-content-start">
                                                        <div><div class="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src={img10} alt=""/></div></div>
                                                        <div class="contact_info_text">yourmail@gmail.com</div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    {/* Contact Form */}
                                    <div class="col-xl-6 contact_col">
                                        <div class="contact_form_container">
                                            <div class="section_title_container_2">
                                                <div class="section_title"><h1>Contact Info</h1></div>
                                                <div class="section_text">Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</div>
                                            </div>
                                            <form action="#" class="contact_form" id="contact_form">
                                                <div class="row contact_row">
                                                    <div class="col-md-6"><input type="text" class="contact_input" placeholder="Name" required="required"/></div>
                                                    <div class="col-md-6"><input type="email" class="contact_input" placeholder="E-mail" required="required"/></div>
                                                </div>
                                                <div><textarea class="contact_input contact_textarea" placeholder="Message" required="required"></textarea></div>
                                                <button class="contact_button">send message</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
                
        </div>    
    );
  }
}

export default Vehicle;
