const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 8080
const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))
let count
router.use(express.static("public"))

/*
Build API
*/

//localhost:3000/api
router.get('/', (req, res) =>{
    res.json({
        'All Games': `http://localhost:${PORT}/games`,
        'All Publishers': `http://localhost:${PORT}/publisher`,
        'All Categories': `http://localhost:${PORT}/category`,
        'Users': `http://localhost:${PORT}/contacts`
    })
})

const gameRoutes = require('./api/gameRoutes')
router.use('/games', gameRoutes)

const publisherRoutes = require('./api/publisherRoutes')
router.use('/publisher', publisherRoutes)

const categoryRoutes = require('./api/categoryRoutes')
router.use('/category', categoryRoutes)

const contactRoutes = require('./api/contactRoutes')
router.use('/contacts', contactRoutes)



router.get('/games', (req, res)=> {
    const url = `http://localhost:${PORT}/games`

    fetch(url)
        .then(res => res.json())

})



router.get('/games/:id', (req, res)=> {
    const id = req.params.id
    const url = `http://localhost:${PORT}/games/${id}`

    fetch(url)
        .then(res => res.json())

})




module.exports = router