const db = require("../../config/db")

exports.getData = (req, res) => {
    const query = `
    SELECT users.id, users.nama, epresence.id_users, epresence.type, epresence.is_approve, epresence.waktu 
    FROM users
    INNER JOIN epresence ON users.id = epresence.id_users
    ORDER BY epresence.waktu DESC
    `

    db.query(query, (error, result) => {
        if (error) throw error

        let data = []

        for (let i = 0; i < result.rows.length; i++) {
            if (i % 3 === 0 && (result.rows[i].nama && result.rows[i].waktu.split(' ')[0]) === (result.rows[i+1].nama && result.rows[i].waktu.split(' ')[0])) {
                data.push([
                    [...result.rows][i],
                    [...result.rows][i+1]
                ])
            }
        }

        const response = data.map(item => {
            let time = item[0].waktu.split(' ')[1].split(':')[0]
            time = eval(`${time}+11`).toString()
            let homeTime = time.length < 2 ? `0${time}:00:00` : `${time}:00:00`

            return {
                id_user: item[0].id_users,
                nama_user: item[0].nama,
                tanggal: item[0].waktu.split(' ')[0],
                waktu_masuk: item[0].waktu.split(' ')[1],
                waktu_pulang: homeTime,
                status_masuk: item[0].is_approve ? 'APPROVE' : 'REJECT',
                status_pulang: item[1].is_approve ? 'APPROVE' : 'REJECT'
            }
        })

        res.status(200).send({
            message: 'Success get data',
            data: response
        })
    })
}