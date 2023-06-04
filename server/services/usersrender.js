const axios = require('axios')

exports.homeRoute = (req,res)=>{
    res.send("Hello World")
}

exports.usersHomeRoute = (req,res)=>{
    // res.send("Hello World")

    //Make a get request to /api/customers
    axios.get('http://localhost:5000/api/users')
    .then(function(response){
        //console.log(response)
        res.send(response.data)
    })
    .catch(err =>{
        res.send(err)
    })
}

exports.registeruser = (req, res)=>{
    res.send('Customer Added Successfully')
}