import React, { Component } from 'react';
import axios from 'axios';


class HotelBooking extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicleId:props.location.state.vehicleId,
            picklocation: props.location.state.picklocation,
            droplocation:props.location.state.droplocation,
            start:props.location.state.start,
            end:props.location.state.end,
            email:props.location.state.email
        }
        this.reserved = this.reserved.bind(this);
    }
    componentDidMount(){
        console.log(this.state.picklocation+" :picklocation");
        console.log(this.state.email+" :email");
        console.log(this.state.vehicleId+" : vehicleid");
        console.log(this.state.start+" : start");
        axios.get('http://localhost:4000/vehicle/vehiclebooking/'+this.state.vehicleId+"/"+this.state.email)
        .then(response => {
            let vehicleBooking = response.data.map((booking)=>{
                if(booking.onlyVehicle === true){
                    return(
                        <div key={this.state.vehicleId}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div class="card">
                                        <img  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h2><span>{booking.vehicleModel}</span></h2><br/><br/>
                                    <span>Pick-Up From: <span>{booking.locations}</span></span><br/><br/>
                                    <span>Drop-Off From: <span>{this.state.droplocation}</span></span><br/><br/>
                                    <span>Pick-Up Date: <span>{this.state.start}</span></span><br/><br/>
                                    <span>Drop-Off Date: <span>{this.state.end}</span></span><br/><br/>
                                    <span>About: <span>Supply vehicle without driver</span></span><br/><br/>
                                    <span>Description: <span>{booking.description}</span></span><br/><br/>
                                </div>
                            </div>    
                            {/* <img id="im"  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <span>Vehicle Owner: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>Vehicle Model: <span>{booking.vehicleModel}</span></span><br/>
                            <span>PickUp From: <span>{booking.locations}</span></span><br/>
                            <span>About: <span>Supply vehicle without driver</span></span><br/>
                            <span>Description: <span>{booking.description}</span></span><br/> */}
                        </div>
                    )
                }else if(booking.onlyVehicle === false){
                    return(
                        <div key={this.state.vehicleId}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div class="card">
                                        <img  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h2>Vehicle Model: <span>{booking.vehicleModel}</span></h2><br/><br/>
                                    <span>Pick-Up From: <span>{booking.locations}</span></span><br/><br/>
                                    <span>Drop-Off From: <span>{this.state.droplocation}</span></span><br/><br/>
                                    <span>Pick-Up Date: <span>{this.state.start}</span></span><br/><br/>
                                    <span>Drop-Off From: <span>{this.state.end}</span></span><br/><br/>
                                    <span>About: <span>Supply a vehicle with a Driver </span></span><br/><br/>
                                    <span>Description: <span>{booking.description}</span></span><br/><br/><br/><br/>
                                </div>
                            </div>   
                        </div>
                    )
                }else{
                    return ''
                }                
            })
            this.setState({vehicleBooking:vehicleBooking});
            console.log("state",vehicleBooking)
        })
    }
    reserved(e){
        e.preventDefault();
        const bookingdetails = {
            vehicleId: this.state.vehicleId,
            picklocation: this.state.picklocation,
            droplocation:this.state.droplocation,
            start:this.state.start,
            end:this.state.end,
            email:this.state.email
        }
        axios.post('http://localhost:4000/vehicle/reserved/',bookingdetails)
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
                                {this.state.vehicleBooking}
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