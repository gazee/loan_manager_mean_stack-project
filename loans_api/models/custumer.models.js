const mongoose =require('mongoose');

const customerschema =mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAdderess:String,
    phoneNumber:String,
    dob :String
}) 

const customerModel =mongoose.model('customer',customerschema);

module.exports =customerModel;
