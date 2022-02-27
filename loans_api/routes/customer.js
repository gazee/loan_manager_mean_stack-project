var express = require('express');
var router = express.Router();
const customerModel=require('../models/custumer.models')
const mongoose =require('mongoose')


/* GET read all customer||route=/customer/list*/
router.get('/list', function(req, res, next) {
  customerModel.find(function(err,customerListResponse){
    if(err){
      res.send({status:500,message:"unable to find customer user"})
    }else{
      const recordCount=customerListResponse.length;
      res.send({status:200,recordCount:recordCount,results:customerListResponse});
    } 
  })
});

/* GET read specifc customer||route=/customer/list*/
router.get('/view', function(req, res, next) {
  const userId =req.query.userId
  customerModel.findById(userId,function(err,customerResponse){
    //here 1st argument is query
    if(err){
      res.send({status:500,message:"unable to find the customer customer"})
    }else{
      res.send({status:200,results:customerResponse});
    } 
  })
});
/* Post creating new customer ||route=/customer/add */
router.post('/add', function(req, res, next) {
  let customerObj =new customerModel({

    firstName:"ariya",
    lastName:"sugunan",
    emailAdderess:"jithin@jsnvd",
    phoneNumber:"9895576600",
    dob :12-12-1997 
  });
  customerObj.save((err,customerObj)=>{
    //here save is a callback methord 
  if(err){
    res.send({status:500,message:"unable to add user"})
  }else{
    res.send({status:200,message:"user added successfully",customerDetails:customerObj});
    // in customerDetails name data is saved in data base
  }    
  })
  
});
/* edit customer ||route=/customer/edit */
router.put('/edit', function(req, res, next) {
  const userId =req.query.userId
  let customerObj ={

    firstName:"safan",
    lastName:"ajanan",
    emailAdderess:"jithin@jsnvd",
    phoneNumber:"9895576600",
    dob :12-12-1997 
  };
  customerModel.findByIdAndUpdate(userId,customerObj,function(err,customerResponse){
    //here 1st argument is query&2nd is object to update 
    if(err){
      res.send({status:500,message:"unable to update the customer "})
    }else{
      res.send({status:200,message:"customer updated succssesfully",results:customerResponse});
    } 
  })
});
/* delaete customer. ||route=/customer/delete */
router.delete('/delete', function(req, res, next) {
  const userId =req.query.userId
  customerModel.findByIdAndDelete(userId,function(err,customerResponse){
    //here 1st argument is query
    if(err){
      res.send({status:500,message:"unable to delete the  customer"})
    }else{
      res.send({status:200,message:"customer deleted",results:customerResponse});
    } 
  })
});

/* delaete multipple customer. ||route=/customer/delete */
router.delete('/delete-multtiple', function(req, res, next) {
  // const userId =req.query.userId
  customerModel.deleteMany({'firstName':"jithin"},function(err,customerResponse){
    //here 1st argument is condition
    if(err){
      res.send({status:500,message:"unable to delete the  customer"})
    }else{
      res.send({status:200,message:"customer deleted",results:customerResponse});
    } 
  })
});
/* search sustomer ||route=/customer/search */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;