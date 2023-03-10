const express = require('express')
const homeschema = require("../models/Schema")
const loginschema = require('../models/loginschema')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.render("index1")
})

Router.get('/index', (req, res) => {
  res.render("index")
})

Router.get('/login', (req, res) => {
  res.render("login")
})

Router.post('/resister', async (req, res) => {

  try {
    const {
      name,
      email,
      uname,
      pass
    } = req.body;

    console.log(req.body)

    const userdata = new homeschema({
      name,
      email,
      uname,
      pass
    })
    res.send(userdata)
    console.log(userdata)

    userdata.save().then(() => {
      //res.send("<h2>Signed up Successfully</h2>")
      console.log("data saved sccessfully")
    })


  } catch (error) {
    console.log("error :" + error)
  }
})

Router.post('/login', async (req, res) => {
  const username = req.body.unam
  const loginpass = req.body.passw
  // console.log(loginpass)

  const {
    unam,
    passw
  } = req.body;
  const userlogindata = new loginschema({
    unam,
    passw
  })

  try {
    const check = await homeschema.findOne({ uname: username });

    if (check.pass === loginpass) {
      res.send("<h2>successfully logged in</h2>")

      console.log(userlogindata)
      userlogindata.save().then(() => {
        console.log("<h2>data saved sccessfully</h2>")
      })
    }
    else if (check.pass !== loginpass) {
      res.send('<h2>Password does not Match With Username</h2>')
    }

  }
  catch {
    res.send("<h2>Username does not exist</h2>")
  }
})

module.exports = Router;