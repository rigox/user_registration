const User =  require('../models/User');
const asyncHandler =  require('../middleware/async')
const bcrypt =  require("bcryptjs")
const jwt =  require("jsonwebtoken")
const User =  require('../models/User');
const asyncHandler =  require('../middleware/async')
const bcrypt =  require("bcryptjs")
const jwt =  require("jsonwebtoken")

//@desc create a user
//@router   POST /api/users/create_user
//@access  Public
exports.createUser =  asyncHandler(async (req,res,next)=>{

    const user =  await User.createUser(req.body)

     res.status(200).json({
            success:true,
            data:user
     });

});



exports.test =  asyncHandler([a,a,a,a],async(req,res,next)=>{

});