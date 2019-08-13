import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
import './css/Header.css';
// import Header from './Header';
import Footer from './Footer';
import './css/Home.css';
import './css/About.css';
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
import img11 from '../../assets/images/intro_2.jpg';
import img12 from '../../assets/images/intro_1.jpg';
import i1 from '../../assets/images/icon_4.svg';
import i2 from '../../assets/images/icon_1.svg';
import i3 from '../../assets/images/icon_5.svg';
import i4 from '../../assets/images/icon_6.svg';


class About extends Component {
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
        this.login = this.login.bind(this);
    }
    login(){
        this.props.history.push('/login');
    }
    handlePage(){
        this.props.history.push('/supplier-login')
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
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
                                            <button type ="submit" className="btn btn-primary">Book Now</button>
                                            <button type ="submit" className="btn btn-dark">Details</button>
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
                                            <li>
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
                                            <li className="nav-item active">
                                                <Link to="/About-us" className="nav-link">About Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div class="header_extra d-flex flex-row align-items-center justify-content-start ml-auto">
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
                    <div class="search_box"><br/><br/><br/><br/><br/></div><br/><br/><br/><br/>
                    <div class="intro_right intro">
                        <div class="container">
                            <div class="row row-xl-eq-height">
                                
                                {/* Intro Image */}
                                <div class="col-xl-6">
                                    <div class="intro_image">
                                        <img src={img12} id="intros" alt=""/>                                    
                                    </div>
                                </div>

                                {/* Intro Right Content */}
                                <div class="col-xl-6 intro_right_col">
                                    <div class="intro_right_content">
                                        <div class="section_title_container text-center">
                                            <div class="section_title"><h1>Beach Hotel - More than a stay</h1></div>
                                            <div class="section_text">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</div>
                                        </div>
                                        <div class="intro_right_text text-center">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus hendrerit, id lobortis leo luctus nec. In vitae nisi aliquam, scelerisque. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus hendrerit, id lobortis leo luctus nec. </div>
                                        <div class="sig text-center">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div><br/><br/><br/><br/>   
                    

                    <div class="intro_left intro">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 order-xl-1 order-2">
                                    <div class="intro_left_content">
                                        <div class="section_title_container text-center">
                                            <div class="section_title"><h1>Amazing Facilities</h1></div>
                                            <div class="section_text">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</div>
                                        </div>
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
                                <div class="col-xl-6 order-xl-2 order-1">
                                    <div class="intro_image">
                                        <img src={img11} id="intros2" alt=""/> 
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>

                    <div class="milestones">
                        <div class="container">
                            <div class="row">

                                <div class="col-xl-3 col-md-6 milestone_col">
                                    <div class="milestone d-flex flex-row align-items-end justify-content-start">
                                        <div class="milestone_icon"><img src={i1} alt="" id="i1"/></div>
                                        <div class="milestone_content">
                                            <div class="milestone_counter" data-end-value="23" data-sign-after="k">0</div>
                                            <div class="milestone_text">Clients since opening</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 milestone_col">
                                    <div class="milestone d-flex flex-row align-items-end justify-content-start">
                                        <div class="milestone_icon"><img src={i2} alt="" id="i2"/></div>
                                        <div class="milestone_content">
                                            <div class="milestone_counter" data-end-value="120">0</div>
                                            <div class="milestone_text">Hotel rooms</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 milestone_col">
                                    <div class="milestone d-flex flex-row align-items-end justify-content-start">
                                        <div class="milestone_icon"><img src={i3} alt="" id="i3"/></div>
                                        <div class="milestone_content">
                                            <div class="milestone_counter" data-end-value="7">0</div>
                                            <div class="milestone_text">One day cruises</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 milestone_col">
                                    <div class="milestone d-flex flex-row align-items-end justify-content-start">
                                        <div class="milestone_icon"><img src={i4} alt="" id="i4"/></div>
                                        <div class="milestone_content">
                                            <div class="milestone_counter" data-end-value="36">0</div>
                                            <div class="milestone_text">Signature Cocktails</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div><br/><br/><br/><br/>

                        {/* <div class="gallery">
                            <div class="gallery_slider_container">

                                <div class="owl-carousel owl-theme gallery_slider">
                                    
                                    <div class="owl-item gallery_item">
                                        <a class="colorbox" href="images/gallery_1.jpg">
                                            <div class="background_image" id="jpg3"></div>
                                        </a>
                                        <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                    </div>

                                    <div class="owl-item gallery_item">
                                        <a class="colorbox" href="images/gallery_2.jpg">
                                            <div class="background_image" id="jpg4"></div>
                                        </a>
                                        <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                    </div>

                                    <div class="owl-item gallery_item">
                                        <a class="colorbox" href="images/gallery_3.jpg">
                                            <div class="background_image" id="jpg5"></div>
                                        </a>
                                        <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                    </div>

                                    <div class="owl-item gallery_item">
                                        <a class="colorbox" href="images/gallery_4.jpg">
                                            <div class="background_image" id="jpg6"></div>
                                        </a>
                                        <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                    </div>

                                    <div class="owl-item gallery_item">
                                        <a class="colorbox" href="images/gallery_5.jpg">
                                            <div class="background_image" id="jpg7"></div>
                                        </a>
                                        <div class="gallery_overlay trans_200 d-flex flex-column align-items-center justify-content-center"><div>+</div></div>
                                    </div>

                                </div>
                            </div>
                        </div> */}

                        

                        {/* <div class="newsletter">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="section_title_container_2">
                                            <div class="section_title"><h1>Our Newsletter</h1></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row newsletter_row">
                                    
                                    
                                    <div class="col-lg-6">
                                        <div class="newsletter_content">
                                            <div class="newsletter_text">
                                                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 newsletter_col">
                                        <form action="#" class="newsletter_form" id="newsletter_form">
                                            <input type="email" class="newsletter_input" placeholder="Your email" required="required"/>
                                            <button class="newsletter_button">subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                <Footer/>
                
        </div>    
    );
  }
}

export default About;
