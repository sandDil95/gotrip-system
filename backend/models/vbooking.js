const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vbooking = new Schema({
    lists: {
        day: [],
        available: []
    }
})

module.exports = mongoose.model('vbooking',vbooking);