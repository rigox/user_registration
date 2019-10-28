
const User =  require('../models/User');
const asyncHandler =  require('../middleware/async')
const bcrypt =  require("bcryptjs")
const jwt =  require("jsonwebtoken")

//@desc signInUser
//@router POST  /api/v1/bootcamp
//@access Public
exports.login  =  asyncHandler (async (req,res,next)=>{

 const {email ,  password}  = req.body || req.query

 let user  = await  User.findOne({email})

  if(!user){
       return res.status(400).json({msg:"invalid credentials"})
  }  

  isMatch =  await bcrypt.compare(password , user.password) 
  if(!isMatch){
       res.status(400).json({msg:"invalid credentials"})
  } 
const  payload ={
     user:{
          id:user.id
     }
    }
    jwt.sign(payload ,process.env.jwtSecret,{expiresIn:36000},(err,token)=>{
             if(err){throw err}
             res.json({token})
    });


});