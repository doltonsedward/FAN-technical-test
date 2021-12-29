const express = require('express')
// controller
const { auth } = require('../middlewares/auth')
const { getData, addData } = require('../controllers')
const { login } = require('../controllers/auth')

const router = express.Router()

router.get('/', auth, getData)
router.post('/add-data', auth, addData)

router.post('/login', login)

module.exports = router