const Pool = require('pg').Pool
const db = new Pool({
    user: 'me',
    host: process.env.HOST || 'localhost',
    database: 'pt_fan_api',
    password: process.env.PASS_USER,
    port: 5432,
})

module.exports = db