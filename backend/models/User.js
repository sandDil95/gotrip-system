const mongoose = require("mongoose")
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    // address:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
UserSchema.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id,  
    }, 'ucsc@123',
    {
         expiresIn: '1d'
    });

}

module.exports = mongoose.model('users' , UserSchema)