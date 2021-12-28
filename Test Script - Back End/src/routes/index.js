const express = require('express')
// controller
const { auth } = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth, )