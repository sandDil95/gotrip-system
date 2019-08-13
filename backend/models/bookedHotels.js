const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookedHotels = new Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    hotelId:{
        type:String,
    },
    customerId:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    rooms:{
        type:Date,
        required:true
    },
    travellers:{
        type:Date,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
})

module.exports = mongoose.model('BookedHotels',bookedHotels);