const express = require("express")
const app = express()
const dotenv =  require("dotenv")
const colors = require("colors")
const connectDB = require("./config/db")


//load envrioment variables

dotenv.config({path:"./config/config.env"})


//load routes 
const auth  =  require('./routes/auth')
const users =  require('./routes/user')

//conncect to database
connectDB()

const PORT =  process.env.PORT || 5000



//setup bodyparser
app.use(express.urlencoded({extended:true}),express.json())


//setup routes
app.use('/api/auth', auth)
app.use('/api/users',users)

//for loggin middleware
if(process.env.NODE_ENV === "development"){
	app.use(morgan())
}




app.listen(PORT , ()=>{
		console.log(`listening on PORT ${PORT}`)  
})
