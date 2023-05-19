const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Destruction publisherDao

const { publisherDao: dao } = require('../../daos/dao')

// localhost:3000/api/publisher
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// localhost:3000/api/publisher/count
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

//localhost:3000/api/publisher/sort
router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})

//localhost:3000/api/publisher/letter/:letter
router.get('/letter/:letter', (req, res)=> {
    dao.findByLetter(res, req.params.letter)
})

//findbyId
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


/*
POST
*/
router.post('/create', (req, res)=>{
    dao.create(req, res)
})

/*
PATCH
*/
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res)
})

module.exports = router