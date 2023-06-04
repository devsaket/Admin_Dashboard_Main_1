const express = require('express')

const router = express.Router()

const {homeRoute, usersHomeRoute, register_user } = require('../services/user_render')
const controller = require('../controller/user_controller')


router.get('/', homeRoute)

router.get('/users', usersHomeRoute)

router.post('/register_users', register_user)



// API Paths
router.post('/api/register_user', controller.create)
router.get('/api/login_user', controller.find)



module.exports = router