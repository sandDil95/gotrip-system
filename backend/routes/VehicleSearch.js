const express = require('express');
const vehicleSearchRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;

const mailer = require('../routes/mailer');
const Vehicle = require('../models/Vehicle');
const Customer = require('../models/Customer');
const Supplier = require('../models/User');
const BookedVehicles = require('../models/bookedVehicles');
const VBooking = require('../models/vbooking');

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


vehicleSearchRoutes.post('/add',upload.single('vehicleImage'),(req,res)=>{
   
        console.log(req.body.SID)
    
            if(req.body.onlyVehicle === "driver"){
                const vehicleDetails = new Vehicle({
                    sId: req.body.SID,
                    // vehicleOwner :'',
                    vehicleNo : req.body.vehicleNo,
                    contactNo : req.body.contactNo,
                    beginingDate : req.body.beginingDate,
                    endingDate : req.body.endingDate,
                    locations : req.body.locations,
                    seatsNo : req.body.seatsNo,
                    onlyVehicle : false,
                    ppkm : req.body.ppkm,
                    vehicleModel : req.body.vehicleModel,
                    // vehicleImage : '',
                    vehicleImage : name,
                    booking : false
                })
                vehicleDetails.save()
                .then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message : 'vehicle added'
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })
            }else{
                const vehicleDetails = new Vehicle({
                    sId: req.body.SID,
                    vehicleOwner :'',
                    vehicleNo : req.body.vehicleNo,
                    contactNo : req.body.contactNo,
                    beginingDate : req.body.beginingDate,
                    endingDate : req.body.endingDate,
                    seatsNo : req.body.seatsNo,
                    onlyVehicle : true,
                    ppkm : req.body.ppkm,
                    vehicleModel : req.body.vehicleModel,
                    locations : req.body.locations,
                    vehicleImage : '',
                    // vehicleImage : name,
                    booking : false
                })
                vehicleDetails.save()
                .then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message : 'vehicle added'
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })
            }       
    })


vehicleSearchRoutes.get('/search/:vehicleStatus/:pickupLocation',(req,res)=>{
    var vStatus = req.params.vehicleStatus;
    var pLocation = req.params.pickupLocation;
    console.log(vStatus);
     //vehicle only variable declaration
    if(vStatus==='driver'){
        var oVehicle=false;
        console.log(oVehicle);
    }else{
        var oVehicle=true;
        console.log(oVehicle);
    }
    Vehicle.find({onlyVehicle:oVehicle,booking:false,locations:pLocation},function(err,result){
        if(err){
            console.log(err);
            res.status(500).json({status: 'failure'});
        }
        if(result.length>=1){
            console.log(result); 
            res.status(200).json(result)
        }else{
            console.log("gfh")
            res.status(404).json({status: 'not found'});
        }
    })
})
vehicleSearchRoutes.get('/vehiclebooking/:id/:email',(req,res)=>{
    var id = req.params.id;
    var email = req.params.email;
    console.log("ID: "+id);
    console.log("Email: "+email);
    Vehicle.find({"_id":new ObjectId(id)},function(err,vehi){ //get selected vehicle details for booking
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

vehicleSearchRoutes.post('/reserved',(req,res)=>{
    var days = [31,28,31,30,31,30,31,31,30,31,30,31];
    console.log("reserved");
    // hotelId: this.state.hotelId,
    Vehicle.find({_id:req.body.vehicleId},function(err,result){ //search searching city hotel available or not
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
                Vehicle Booking Details
                <ul>
                    <li>picklocation: ${req.body.picklocation}</li>
                    <li>droplocation: ${req.body.droplocation}</li>
                    <li>start: ${req.body.start}</li>
                    <li>end: ${req.body.end}</li>
                    <li>© 2019 All Rights Reserved by <b>GoTrip Team.</b></li>
                </ul>` ;
            Customer.find({email:req.body.email},function(err,custmr){
                console.log(custmr[0]._id);
                if(custmr.length>=1){
                    const booking = new BookedVehicles({
                        vehicleId: req.body.vehicleId,
                        customerId: custmr[0]._id,
                        picklocation :req.body.picklocation,
                        droplocation : req.body.droplocation,
                        start : req.body.start,
                        end : req.body.end,
                        email : req.body.email,
                    });
                    console.log(booking);
                    booking.save((err, doc) => {
                        if (!err){        //sucessfilly booked   
                            // res.status(200).json({
                            //     message: "Successfully Inserted",
                            //     Signup : booking
                            // })
                            // var date1 = new Date(req.body.start);
                            // var date2 = new Date(req.body.end);
                            // var differ= parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
                            // var numdays = 0  ;
                            // for(let i=0; i<date1.getMonth()-1; i++){
                            //     numdays += days[i];
                            // }
                            // var startdate = numdays + date1.getDay();
                            // var finishdate = startdate + differ;
                            // var arry1 = [];
                            // var arry2 = [];
                            // for( let j=startdate; j<=finishdate; j++){
                            //     arry1.push = j.add;
                            //     arry2.push = 1;
                            // }
                            // const booked = new VBooking({
                            //     lists:{arry1, arry2}
                            // })
                            // booked.save((errr, docs) => {
                            //     if (!errr){
                            //         res.status(200).json({
                            //             message: "Available",
                            //             Availability : booked
                            //         })
                            //     }
                            // })                 
                            res.status(200).json({
                                message: "Successfully Inserted",
                                Signup : booking
                            })
                            mailer.sendEmail('gotrip.lk@gmail.com', req.body.email, 'Vehicle Reservation', html)        
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

// vehicleSearchRoutes.post('/reserved',(req,res)=>{
//     var days = [31,28,31,30,31,30,31,31,30,31,30,31];
//     console.log("reserved");
//     Vehicle.find({_id:req.body.hotelId},function(err,result){ //search searching city hotel available or not
//         if(err){
//             res.status(500).json({status: 'failure'});
//         }
//         if(result.length>=1){
//             console.log(result); 
//         }else{
//             res.status(404).json({status:'Not Found'})
//         }
//     })   
//         const html = `Hi there,
//         <br/>
//         Thanks For Requested.
//         Your booking is processing. We will inform whether your booking is confirmed soon.
//         <br/><br/>
//         Vehicle Booking Details
//         <ul>
//             <li>picklocation: ${req.body.picklocation}</li>
//             <li>droplocation: ${req.body.droplocation}</li>
//             <li>start: ${req.body.start}</li>
//             <li>end: ${req.body.end}</li>
//             <li>© 2019 All Rights Reserved by <b>GoTrip Team.</b></li>
//         </ul>` ;
//         Customer.find({email:req.body.email},function(err,custmr){
//             console.log(custmr[0]._id);
//             if(custmr.length>=1){

                
//                 const booking = new BookedVehicles({
//                     vehicleId: req.body.vehicleId,
//                     customerId: custmr[0]._id,
//                     picklocation :req.body.picklocation,
//                     droplocation : req.body.droplocation,
//                     start : req.body.start,
//                     end : req.body.end,
//                     email : req.body.email,
//                 });
//                 console.log(booking);
//                 booking.save((err, doc) => {
//                     if (!err){        //sucessfilly booked                    
//                         // res.status(200).json({
//                         //     message: "Successfully Inserted",
//                         //     Signup : booking
//                         // })
//                         // var date1 = new Date(req.body.start);
//                         // var date2 = new Date(req.body.end);
//                         // var differ= parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
//                         // var numdays = 0  ;
//                         // for(let i=0; i<date1.getMonth()-1; i++){
//                         //     numdays += days[i];
//                         // }
//                         // var startdate = numdays + date1.getDay();
//                         // var finishdate = startdate + differ;
//                         // var arry1 = [];
//                         // var arry2 = [];
//                         // for( let j=startdate; j<=finishdate; j++){
//                         //     arry1.push = j.add;
//                         //     arry2.push = 1;
//                         // }
//                         // const booked = new VBooking({
//                         //     lists:{arry1, arry2}
//                         // })
//                         // booked.save((errr, docs) => {
//                         //     if (!errr){
//                         //         res.status(200).json({
//                         //             message: "Available",
//                         //             Availability : booked
//                         //         })
//                         //     }
//                         // })
//                         mailer.sendEmail('gotrip.lk@gmail.com', req.body.email, 'Vehicle Reservation', html)
    
//                     }else{
//                         return res.status(500).json({
//                             error: err
//                         });
//                     }
//                 });
//             }else{
//                 res.status(404).json({status:'Not Found'})
//             }
//         })
// })


module.exports = vehicleSearchRoutes;