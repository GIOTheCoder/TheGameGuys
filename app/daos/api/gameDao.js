const con = require('../../config/dbconfig')

const gameDao = {
    table: 'game',

    create: (req, res)=>{
        if(Object.keys(req.body).length === 0){
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body) // create an array
            const values = Object.values(req.body) // create an array

            con.execute(
                `INSERT INTO GAME SET ${fields.join('= ?,')} = ?;`,
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
                `UPDATE game SET ${fields.join(' = ?, ')} = ? WHERE game_id = ?;`,
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


    findGames: (res, table) => {
        con.query(
            `SELECT game.game_id, game.title, game.image, game.year, game.description, game.rating, game.price, game.category_id, publisher.publisher, game_system.game_system_name 
            FROM game
            INNER JOIN publisher
            ON game.publisher_id = publisher.publisher_id
            INNER JOIN game_game_system 
            ON game.game_id = game_game_system.game_id 
            INNER JOIN game_system 
            ON game_game_system.game_system_id = game_system.game_system_id;`,

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

    findbyRating: (res, rating)=> {
        con.execute(
            'SELECT * FROM game WHERE rating = ?;',
            [rating],
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

    findbyYear: (res, year)=> {
        con.execute(
            'SELECT * FROM game WHERE year = ?;',
            [year],
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


module.exports = gameDao