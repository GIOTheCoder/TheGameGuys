const con = require('../../config/dbconfig')

const publisherDao = {
    table: 'actor',

    create: (req, res)=> {
        if(Object.keys(req.body).length === 0){
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body) // create an array
            const values = Object.values(req.body) // create an array

            con.execute(
                `INSERT INTO PUBLISHER SET ${fields.join('= ?,')} = ?;`,
                values,
                (error, dbres)=> {
                    if(!error){
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res)=> {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "ID must be a number."
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute( 
                `UPDATE pubisher SET ${fields.join(' = ?, ')} = ? WHERE publisher_id = ?;`,
                [...values, req.params.id],
                (error, dbres) => {
                    if(!error){
                        res.send(`Changes ${dbres.changedRows} row(s)`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    },

    sort: (req, res)=> {
        con.execute(
            'SELECT * FROM publisher ORDER BY publisher;',
            (error, rows)=> {
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    },

    
    findByLetter: (res, letter)=> {
        con.execute(
            `SELECT * FROM publisher WHERE publisher LIKE '${letter}%'`,
            [letter],
            (error, rows)=> {
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    }
}

module.exports = publisherDao