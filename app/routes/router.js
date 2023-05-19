const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000
const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))
let count
router.use(express.static("public"))

/*
Build API
*/

//localhost:3000/api
router.get('/', (req, res) =>{
    res.json({
        'All Games': `http://localhost:${PORT}/api/games`,
        'All Publishers': `http://localhost:${PORT}/api/publisher`,
        'All Categories': `http://localhost:${PORT}/api/category`
    })
})

const gameRoutes = require('./api/gameRoutes')
router.use('/games', gameRoutes)

const publisherRoutes = require('./api/publisherRoutes')
router.use('/publisher', publisherRoutes)

const categoryRoutes = require('./api/categoryRoutes')
router.use('/category', categoryRoutes)


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