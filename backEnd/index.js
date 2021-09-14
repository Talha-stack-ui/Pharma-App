const express = require("express")  //For Running Server 
const bodyParser = require('body-parser') // For conversion of JSON coming from Front To backend
const mongoose = require('mongoose') //importing Mongoose
const PORT = 800
const app = express()
const {mongoUrl} = require('./keys') //Loading Mongo URL we got from Cluster
require("./models/User") //importion User 
const requireToken = require('./middleware/requireToken') //Chking Token is available to give access to specific route
const authRoutes = require('./routes/authRoutes') //importing routes *This should be done after User Bcoz we are using UserModel in authRoutes*
app.use(bodyParser.json()) // Creating MiddleWare
app.use(authRoutes) //middleWare for Routes
mongoose.connect(mongoUrl)

mongoose.connection.on('connected' , ()=>{
    console.log(" MongoDb Connected SuccesFully ");
});

mongoose.connection.on('error' , (err)=>{
    console.log(" SomeThing Went Wrong  " , err);
});


app.get('/', requireToken , (req , res)=>{ //requireToken is middleWare for chking jwtToken is Present & correct or not...
    res.send("Your Are Logged In & Your Email is "+ req.user.email + " And Password is "+req.user.password)
})

app.listen(PORT, ()=>{
    console.log("Running.......");
})