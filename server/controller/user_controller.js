const bcrypt = require('bcryptjs')

var UserInfoTable = require('../models/user_model')


exports.create = async (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    } else {
        const { firstName, lastName, email, mobile, password } = req.body;
        
        try {
            console.log(req.body)
            const oldUser = await UserInfoTable.find({ email: email })

            if (oldUser.length>0) {
                res.send({ error: "User Exists" })
            } else {
                const encryptedPassword = await bcrypt.hash(password, 10);
                await UserInfoTable.create({ firstName, lastName, email, mobile, password: encryptedPassword })
                res.send({ status: "ok" })
            }
        } catch (error) {
            res.send({ status: "error" })
        }
    }
}


exports.find = (req, res) => {
    res.send("All Users")
}