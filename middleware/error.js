const errorResponse =  require("../utils/errorResponse")

const errorHandler = (err,req,res,next) =>{ 
  //log the error  for the developers
  console.log(err.stack.red)

  let error = {...err}
    error.message =  err.message
  // check for cast error
  if(err.name ==="CastErrror"){
       const message =    `Resource not found with the id of ${err.value}`
       error =   new errorResponse(message ,  404)
  }

  // check for duplicate key error
  if(err.code === 110000){
       const message  = "Duplicate  field value enter"
       error = new errorResponse(message,400)
  }

  // check for validation error

  if(err.name === 'validationError'){
        const message = Object.values(err.errors).map(val=> val.message);
        error = new errorResponse(message,400)
  }




    res.status(error.statusCode || 500 ).json({
            success:false,
            error:error.message || 'Server Error'
    });




}


module.exports =  errorHandler;