const express = require('express');
const tailorSearchRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;
const mailer = require('../routes/mailer');

const Hotel = require('../models/Hotel');
const Vehicle = require('../models/Vehicle');
const Supplier = require('../models/User');
const Customer = require('../models/Customer');
const BookedHotels = require('../models/bookedHotels');

var name;
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        name = Date.now() +file.originalname;
        cb(null,name);
    }
});

const fileFilter = (req,file,cb)=>{
    //reject a file
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
        cb(null,true);
    }
    cb(null,false);    
};
const upload = multer({
    storage : storage,
    fileFilter: fileFilter
});

tailorSearchRoutes.get('/search/:city/:start/:end/:rooms/:size',function(req,res,next){
    console.log("fygjhk")
    var searchedcity = req.params.city;
    console.log(req.params.city+" :searchedcity");
    Hotel.find({place:searchedcity},function(err,htl){ //search searching city hotel available or not
        var vStatus = req.params.size;
        console.log(vStatus);
        //vehicle only variable declaration
        if(vStatus==='driver'){
            var oVehicle=false;
            console.log(oVehicle);
        }else{
            var oVehicle=true;
            console.log(oVehicle);
        }
        Vehicle.find({onlyVehicle:oVehicle,booking:false,locations:searchedcity},function(err,vehi){
            var result = vehi.concat(htl);
            if(err){
                console.log(err);
                res.status(500).json({status: 'failure'});
            }
            var count=0;
            if(result.length>=1){
                console.log(result); 
                res.status(200).json(result);
                console.log(result.length);
                for(var i = 0; i < result.length;i++){
                    if(result[i].vehicleNo){
                        count++;
                    }
                }
                var vehicleCount = count;
                var arry = [];
                console.log(vehicleCount);
                var element = {};
                for(var i = 0; i < vehicleCount;i++){
                    for(var j = vehicleCount; j < result.length;j++){
                        var obj1 = result[i];
                        var obj2 = result[j];
                        var element = Object.assign(obj1, obj2);
                        console.log(element);
                        arry.concat(element);
                        console.log(arry);
                    }
                }
                console.log("arry");
                console.log(arry);
            }else{
                console.log("gfh")
                res.status(404).json({status: 'not found'});
            }
        })
    })
})

// tailorSearchRoutes.get('/hotelbooking/:id/:email',(req,res)=>{
//     var id = req.params.id;
//     var email = req.params.email;
//     console.log("ID: "+id);
//     console.log("Email: "+email);
//     Hotel.find({"_id":new ObjectId(id)},function(err,vehi){ //get selected vehicle details for booking
//         Customer.find({email:email},function(err,custmr){
//             var result = vehi.concat(custmr);
//             if(err){
//                 console.log(err);
//                 res.status(500).json({status:'failure'});
//             }
//             if(result.length>=1){
//                 console.log(result);
//                 res.status(202).json(result);
//             }else{
//                 res.status(404).json({status:'Not Found'})
//             }
//         })
//     })
// })

tailorSearchRoutes.post('/reserved',(req,res)=>{
    console.log("reserved");
    // hotelId: this.state.hotelId,
    Hotel.find({_id:req.body.hotelId},function(err,result){ //search searching city hotel available or not
        if(err){
            res.status(500).json({status: 'failure'});
        }
        if(result.length>=1){
            console.log(result); 
            const html = `Hi there,
            <br/>
            Thanks For Requested.
            Your booking is processing. We will inform whether your booking is confirmed soon.
            <br/><br/>
            Your Accomodations Booking Details
            <ul>
                <li>Hotel: ${result[0].hotelName}</li>
                <li>City: ${req.body.city}</li>
                <li>Address: ${result[0].address}</li>
                <li>Rooms: ${req.body.rooms}</li>
                <li>Travellers: ${req.body.travellers}</li>
                <li>Start: ${req.body.start}</li>
                <li>End: ${req.body.end}</li>
                <li>© 2019 All Rights Reserved by <b>GoTrip Team.</b></li>
            </ul>` ;
            Customer.find({email:req.body.email},function(err,custmr){
                console.log(custmr[0]._id);
                if(custmr.length>=1){
                    const booking = new BookedHotels({
                        hotelId: req.body.hotelId,
                        customerId: custmr[0]._id,
                        city : req.body.city,
                        address : result[0].address,
                        rooms : req.body.rooms,
                        travellers : req.body.travellers,
                        start : req.body.start,
                        end : req.body.end,
                    });
                    console.log(booking);
                    booking.save((err, doc) => {
                        if (!err){        //sucessfilly booked                    
                            res.status(200).json({
                                message: "Successfully Inserted",
                                Signup : booking
                            })
                            mailer.sendEmail('gotrip.lk@gmail.com', req.body.email, 'Accomadation Reservation', html)
        
                        }else{
                            return res.status(500).json({
                                error: err
                            });
                        }
                    });
                }else{
                    res.status(404).json({status:'Not Found'})
                }
            })
        }else{
            console.log("err");
            res.status(404).json({status: 'not found'});
        }
    })
})

module.exports = tailorSearchRoutes;