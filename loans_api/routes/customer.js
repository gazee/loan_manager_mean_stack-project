var express = require('express');
var router = express.Router();
const customerModel=require('../models/custumer.models')
const mongoose =require('mongoose')

/* GET read all customer */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* Post creating new customer */
router.post('/add', function(req, res, next) {
  let customerObj =new customerModel({

    firstName:"jithin",
    lastName:"kaloth",
    emailAdderess:"jithin@jsnvd",
    phoneNumber:"9895576600",
    dob :12-12-1997 
  });
  customerObj.save((err,customerObj)=>{
  if(err){
    res.send({status:500,message:"unable to add user"})
  }else{
    res.send({status:200,message:"user added successfully",customerDetails:customerObj});
  }    
  })
  
});
/* edit customer */
router.put('/edit', function(req, res, next) {
  res.send('respond with a resource');
});
/* delaete customer. */
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});
/* search sustomer */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;