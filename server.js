const express = require("express")
const app = express()
const dotenv =  require("dotenv")
 
//load envrioment variables

dotenv.config({path:"./config/config.env"})



const PORT =  process.env.PORT || 5000




app.listen(PORT ()=>{
		console.log(`listening on PORT ${PORT}`)  
})
