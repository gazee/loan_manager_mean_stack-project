const mongoose =require('mongoose');

const loanschema =mongoose.Schema({
    loanName:String,
    loantype:String,
    loanAmmount:Number,
    loanIssueDate:Date,
    loanStatus :String
}) 

const loanModel =mongoose.model('loan',loanschema);

module.exports =loanModel;
