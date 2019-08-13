import React, { Component } from 'react';
import axios from 'axios';

class HotelBooking extends Component {
    constructor(props){
        super(props);
        this.state={
            hotelId:props.location.state.hotelId,
            city: props.location.state.city,
            rooms:props.location.state.rooms,
            travellers:props.location.state.travellers,
            start:props.location.state.start,
            end:props.location.state.end,
            email:props.location.state.email
        }
        this.reserved = this.reserved.bind(this);
    }
    componentDidMount(){
        this.setState({
            hotelId : this.props.location.state.hotelId
        })
        this.state.hotelId = this.props.location.state.hotelId;
        this.state.email = this.props.location.state.email;
        console.log(this.state.hotelId+" :hotelid");
        
        console.log(this.state.email+" :email");
        console.log(this.state.start+" : start");
        axios.get('http://localhost:4000/hotel/hotelbooking/'+this.state.hotelId+"/"+this.state.email)
        .then(response => {
            let hotelBooking = response.data.map((booking)=>{
            console.log(response);
            if(booking._id === this.state.hotelId){
                return(
                    <div key={this.state.hotelId}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">


                                    <img  src={'http://localhost:4000/uploads/'+booking.hotelImage} alt="Hotel Avatar: "/><br/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h2><span>{booking.hotelName}</span></h2><br/><br/>
                                <span>City <span>{booking.place}</span></span><br/><br/>
                                <span>Rooms: <span>{this.state.rooms}</span></span><br/><br/>
                                <span>travellers: <span>{this.state.travellers}</span></span><br/><br/>
                                <span>Pick-Up Date: <span>{this.state.start}</span></span><br/><br/>
                                <span>Drop-Off Date: <span>{this.state.end}</span></span><br/><br/>
                            </div>
                        </div>
                    </div>
                )
            }
            })
            this.setState({hotelBooking:hotelBooking});
            console.log("state",hotelBooking)   
        })
    }
    
    reserved(e){
        e.preventDefault();
        const bookingdetails = {
            hotelId: this.state.hotelId,
            city: this.state.city,
            rooms:  this.state.rooms,
            travellers:   this.state.travellers,
            start:  this.state.start,
            end:   this.state.end,
            email:   this.state.email
        }
        axios.post('http://localhost:4000/hotel/reserved/',bookingdetails)
        .then(response=>{
            alert("Successfully booked")
            this.props.history.push({
                pathname: '/logged',
                state: {
                    email:this.state.email
                }
            })
        },error=>{
            alert("failed")
            // if (error instanceof HttpErrorResponse){
            // if(error.response.status===401){
            //     alert("Incorrect Password!!!")
            // }else if(error.response.status===404){
            //     alert("Unauthorized Access")
            // }
            // }
        })
    }
    
    render(){
        return(
            <div>
                <div id="contentbodyy">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <form className = "form-container" >
                                <br/><br/>
                                {this.state.hotelBooking}
                                <div className="row">
                                    <div className="col-sm-6"></div>
                                    <div className="col-sm-6">
                                        <span><button type ="submit" onClick={this.reserved} className="btn btn-primary">Reserve</button></span>
                                    </div>
                                </div>    
                            </form>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}
export default HotelBooking;