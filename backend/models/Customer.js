const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let Customers = new Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true
    },
    saltSecret:{
        type:String,
    }
})

Customers.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            // this.isvalid = false;
            next();
        });
    }); 
});
Customers.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id,  
    }, 'ucsc@123',
    {
         expiresIn: '1d'
    });

}

module.exports = mongoose.model('Customers',Customers);