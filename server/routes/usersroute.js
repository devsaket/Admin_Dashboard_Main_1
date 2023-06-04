const express = require('express')

const router = express.Router()

const {homeRoute, usersHomeRoute, registeruser } = require('../services/usersrender')
const controller = require('../controller/usercontroller')


router.get('/', homeRoute)

router.get('/users', usersHomeRoute)

router.post('/registerusers', registeruser)



// API Paths
router.post('/api/users', controller.create)
router.get('/api/users', controller.find)



module.exports = router