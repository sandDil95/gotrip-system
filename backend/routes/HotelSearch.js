const express = require('express');
const hotelSearchRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;
const mailer = require('../routes/mailer');

const Hotel = require('../models/Hotel');
const Supplier = require('../models/User');
const Customer = require('../models/Customer');
const BookedHotels = require('../models/bookedHotels');

var name;
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'D:/gotrip-system/src/component/supplier/Image');
    },
    filename: function(req,file,cb){
        name = Date.now();
        cb(null,name + ".jpg");
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

hotelSearchRoutes.post('/add',upload.any(),(req,res)=>{
    //console.log(req.body.hotelImage);
    console.log("Saving")
    const hotel = new Hotel(req.body)
    hotel.save().then(result=>{
        res.status(201).json({
            message:"send"
        })
    })
       
            // const hotelDetails = new Hotel({
            //     sId: req.body.SID,
            //     hotelName: req.body.hotelName,
            //     contactNo: req.body.contactNo,
            //     address: req.body.address,
            //     place: req.body.place,
            //     hotelType:req.body.hotelType,
            //     single_room_num:req.body.single_room_num,
            //     single_room_payment:req.body.single_room_payment,
            //     double_room_num:req.body.double_room_num,
            //     double_room_payment:req.body.double_room_payment,
            //     triple_room_num:req.body.triple_room_num,
            //     triple_room_payment:req.body.triple_room_payment,
            //     quad_room_num:req.body.quad_room_num,
            //     quad_room_payment:req.body.quad_room_payment,
            //     hotelImage : '',
            //     // hotelImage : name,
            //     booking : false
            // })
            // hotelDetails.save()
            // .then(doc => {
            //     console.log(doc);
            //     res.status(201).json({
            //         message: 'Hotel Added' 
            //     })
            // })
            // .catch(err => {
            //     console.log(err);
            //     res.status(500).json({
            //         error:err
            //     })
            // });
        
    
})

hotelSearchRoutes.get('/search/:city',function(req,res,next){
    var searchedcity = req.params.city;
    console.log(searchedcity+"hgbj");
    Hotel.find({place:searchedcity},function(err,result){ //search searching city hotel available or not
        if(err){
            console.log(err);
            res.status(500).json({status: 'failure'});
        }
        if(result.length>=1){
            console.log(result); 
            res.status(200).json(result)
        }else{
            res.status(404).json({status: 'not found'});
        }
    })
})

hotelSearchRoutes.get('/hotelbooking/:id/:email',(req,res)=>{
    var id = req.params.id;
    var email = req.params.email;
    console.log("ID: "+id);
    console.log("Email: "+email);
    Hotel.find({"_id":new ObjectId(id)},function(err,vehi){ //get selected vehicle details for booking
        Customer.find({email:email},function(err,custmr){
            var result = vehi.concat(custmr);
            if(err){
                console.log(err);
                res.status(500).json({status:'failure'});
            }
            if(result.length>=1){
                console.log(result);
                res.status(202).json(result);
            }else{
                res.status(404).json({status:'Not Found'})
            }
        })
    })
})

hotelSearchRoutes.post('/reserved',(req,res)=>{
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

module.exports = hotelSearchRoutes;