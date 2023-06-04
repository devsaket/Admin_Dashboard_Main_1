const express = require('express')

const router = express.Router()

const userController = require('../controller/user_controller')

// API Paths

// to register any user
router.post('/api/register_user', userController.create)

// to login any user
// router.get('/api/login_user', userController.find)

// to fetch all users 
router.get('/api/get_all_users', userController.find)



module.exports = router