const  mongoose = require("mongoose")
const Schema =   mongoose.Schema


const  userSchema =  new Schema({

    firstName :{
         type:String,
         required:true
    },
    lastName:{
          type:String,
          required:true,
    },

    fullName:{
         type:String
    },
    emai:{
          type:String,
          required:true,
    },
    password:{
        type:String,
        required:true
    }



});

userSchema.pre('save',function(next){
    
    this.fullName =   this.firstName + ',' + this.lastName
    
    next(); 
});


const user  =  mongoose.model('workers',userSchema)

module.exports =  user;