const db = require("../../config/db")

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    const { email } = req.body
    
    db.query(`SELECT * FROM users WHERE email = $1`, [email], async (error, result) => {
        if (error) {
            return res.status(500).send({
                message: 'Internal server error'
            })
        }

        if (!result.rows.length) {
            return res.status(404).send({
                status: "error",
                message: "Email or password are incorrect"
            })
        }

        const isPassValid = await bcrypt.compare(req.body.password, result.rows[0].password)
        if (!isPassValid) {
            return res.status(404).send({
                status: "error",
                message: "Email or password are incorrect"
            })
        }

        const { id } = result.rows[0]

        const token = jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: '1d' })

        res.status(200).send({
            message: 'Success login',
            token
        })
    })
}