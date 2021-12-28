const express = require('express')
// controller
const { auth } = require('../middlewares/auth')
const { getData } = require('../controllers')
const { login } = require('../controllers/auth')

const router = express.Router()

router.get('/', auth, getData)

router.post('/login', login)

module.exports = router