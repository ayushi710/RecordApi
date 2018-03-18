'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recordSchema = new Schema({
    name : {
        type : String,
        required:'Enter your name'
    },
    date_of_birth : {
        type : Date ,
        deafult: Date.now
    },
    email : {
        type : String,
        required: 'Enter Your Email'
    },
    contact : {
        type : String,
        required: 'Enter Your contact number'
    }
});

module.exports = mongoose.model('Records',recordSchema);