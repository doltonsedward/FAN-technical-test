const db = require("../../config/db")

exports.login = (req, res) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) throw error

        res.status(200).send(result.rows)
    })
}