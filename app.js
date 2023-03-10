const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bp = require('body-parser')
const homerouter=require('./routers/homerouters')
const port = process.env.port || 8080;

//db connection
mongoose.connect('mongodb://localhost:27017/signupdb')
const db=mongoose.connection;


db.on('error',()=>{console.log("error in connection")})
db.once('open',()=>{console.log("connected")})

app.set('view engine','ejs')
app.use(express.static('public'))
app.listen(port)

app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use('/',homerouter)



