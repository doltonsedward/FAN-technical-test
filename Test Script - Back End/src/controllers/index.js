const db = require("../../config/db")

exports.getData = (req, res) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) throw error

        res.status(200).send({
            status: 'success',
            data: result.rows
        })
    })
}