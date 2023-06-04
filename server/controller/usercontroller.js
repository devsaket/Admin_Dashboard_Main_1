var UserTable = require('../models/usersmodel')

exports.create = (req, res) =>{
    console.log("User creation");

    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return
    }
}


exports.find = (req, res) => {
    
}