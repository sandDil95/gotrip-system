import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import './css/Header.css';
// import Header from './Header';
import Footer from './Footer';
import './css/Home.css';
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
import bell from '../../assets/images/bell.png';
import hotel from '../../assets/images/hotel.jpg';
import hotel1 from '../../assets/images/hotel1.jpg';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            city : '',
            start : '',
            end : '',
            rooms : '',
            travellers : ''
        }
        this.onChange = this.onChange.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bookHotel = this.bookHotel.bind(this);
        this.login = this.login.bind(this);
    }
    login(){
        this.props.history.push('/login')
    }
    handlePage(){
        this.props.history.push('/supplier-login')
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    bookHotel(e){ //click booking vehicle
        const val = e.target.value;
        console.log(val+"  val id");
        this.props.history.push({
            pathname: '/hlogin',
            state: { hotelId:val, rooms:this.state.rooms, travellers:this.state.travellers, city:this.state.city, start:this.state.start, end:this.state.end }
        })     
    }
    onSubmit(e){
        e.preventDefault();
        console.log("hjnkjkn")
        const searchDetails = {
            city : this.state.city,
            start : this.state.start,
            end: this.state.end,
            rooms: this.state.rooms,
            travellers: this.state.travellers,
            // hotels:[],
        }
        console.log(searchDetails);
        this.componentDidMount();
        // axios.post('http://localhost:4000/hotel/search/hotel-search',searchDetails)
        //     .then(res => {
        //         alert("Successfully Searching")
        //         console.log(res);

        //     })
        //     .catch(err => { console.log(err) })
    }
    componentDidMount(){
        if(this.state.city===''){
            //if there are no details added
        }else{
            console.log(this.state.city); //remove
            axios.get('http://localhost:4000/hotel/search/'+this.state.city)
            .then(response => {
                console.log("didmount")
                let hotels = response.data.map((hotel) => {
                    console.log("response")
                    return (
                            <div key={hotel.hotelName}>
                                <div className="card d-block" id="hotelcard">
                                    <div class="row">
                                        <div className="col-lg-8">
                                            <div className="card d-block">
                                                <img className="card-img-top" src={'http://localhost:4000/uploads/'+hotel.hotelImage} alt="Hotel Avatar: "/><br/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card-body" id="accocard">
                                            <span> Hotel Name: <span>{hotel.hotelName}</span></span><br/>
                                            <span> Location: <span>{hotel.place}</span></span><br/><br/><br/>
                                            <button type ="submit" className="btn btn-primary" value={hotel._id} onClick={(e) => {this.bookHotel(e)}}>Book Now</button>
                                            {/* <p class="card-text"></p> */}
                                        </div>
                                        </div>
                                    </div>
                                </div><br/> 
                            </div>
                    )
                })
                this.setState({ hotels : hotels });
                console.log("state",hotels)
                // this.setState({ booking:response.data })
            })
            .catch(function(error){
                console.log(error); //remove
            })
        }
        
    }
  render() {
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
                                            <li className="nav-item active">
                                                <Link to="/" className="nav-link">Accomadations</Link>
                                            </li>
                                            <li>
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
                                        {/* <Link to="/" className="nav-link">
                                            <div class="logo">
                                                <img className="imglogo" src={bell} alt=""/>
                                            </div>
                                        </Link> */}
                                        <div class="phone d-flex flex-row align-items-center justify-content-start">
                                            <a onClick={this.login}>Login</a>
                                        </div>
                                        <div class="phone d-flex flex-row align-items-center justify-content-start">
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
                    <div id="content-bodyy" className="card">
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
                                            <div class="home_text">Find the perfect place to stay</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search_box"><br/><br/><br/><br/></div>
                    <div class="search_box">
                        <div class="container" >
                            <div class="row">
                                <div class="col">
                                    <div class="search_box_container d-flex flex-row align-items-center justify-content-start">
                                        <div class="search_form_container">
                                            <form id="accomadtn" className = "form-container" onSubmit={this.onSubmit}> 
                                                <div class="d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                                    <ul class="search_form_list d-flex flex-row align-items-center justify-content-start flex-wrap">
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input placeholder="City" className="form-control" name="city" onChange={this.onChange} type="text" value={this.state.city}/><br/>
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input placeholder="Check-in" className="form-control" name="start" onChange={this.onChange} type="date" value={this.state.start}/> 
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input placeholder="Check-out" className="form-control" name="end" onChange={this.onChange} type="date" value={this.state.end}/>
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input type="number " className="form-control" placeholder="Travellers" name="travellers" onChange={this.onChange} value={this.state.travellers}/>
                                                        </li>
                                                        <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                            <input type="number" className="form-control" placeholder="Rooms" name="rooms" onChange={this.onChange} value={this.state.rooms}/>
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
                                {this.state.hotels}
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                        

                    <div class="intro">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="section_title_container text-center">
                                        <div class="section_title"><h1>Have The Best Holiday...</h1></div>
                                        <div class="section_text">hotels and resorts</div>
                                    </div><br/>
                                </div>
                            </div>
                            <div class="row intro_row">
                                <div class="col-lg-6">
                                    <div class="intro_image"><img src={hotel1} id="sideimg"/></div>
                                </div>
                                <div class="col-lg-6 ">
                                    <div class="intro_content">
                                        <div class="quote"><img src={hotel} alt=""/></div>
                                        
                                        {/*<div class="intro_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus hendrerit, id lobortis leo luctus nec.</p>
                                        </div>*/}<br/><br/>
                                        {/*<div class="intro_author d-flex flex-row align-items-center justify-content-start">
                                            <div class="author_image"><img src={img4} alt="https://unsplash.com/@onurozkardes"/></div>
                                            <div class="intro_author_content">
                                                <div class="intro_author_name">Michael Williams</div>
                                                <div class="intro_author_title">client</div>
                                            </div>
                    </div>*/}
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
                                       {/*<div class="icon_box_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                        </div>*/}
                                    </div>
                                </div>

                                {/* Icon Box */}
                                <div class="col-lg-4">
                                    <div class="icon_box text-center">
                                        <div class="icon_box_icon"><img id="x" src={img6} alt=""/></div>
                                        <div class="icon_box_title"><h2>Swimming Pool</h2></div>
                                        {/*<div class="icon_box_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                        </div>*/}
                                    </div>
                                </div>
                                
                                {/* Icon Box */}
                                <div class="col-lg-4">
                                    <div class="icon_box text-center">
                                        <div class="icon_box_icon"><img id="x" src={img7} alt=""/></div>
                                        <div class="icon_box_title"><h2>Luxury Resort</h2></div>
                                        {/*<div class="icon_box_text">
                                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                        </div>*/}
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

                         {/*<div class="newsletter">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="section_title_container_2">
                                            <div class="section_title"><h1>Our Newsletter</h1></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row newsletter_row">*/}
                                    
                                    {/* Newsletter Content 
                                    <div class="col-lg-6">
                                        <div class="newsletter_content">
                                            <div class="newsletter_text">
                                                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</p>
                                            </div>
                                        </div>
                                    </div>*/}

                                    {/* Newsletter Form 
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

                                            {/* Contact Info Box 
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
                                            </div>*/}

                                        </div>
                                    </div>
                                    
                                    {/* Contact Form 
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
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
                
        </div>    
    );
  }
}

export default Home;
