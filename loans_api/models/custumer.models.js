const mongoose =require('mongoose');

const customerschema =mongoose.Schema({
    firstname:String,
    lastname:String,
    emailadderess:String,
    phonenumber:String,
    dob :String
}) 

const customerModel =mongoose.model('customer',customerschema);
//customer' => collection name


module.exports =customerModel;
