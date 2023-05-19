const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Destruction filmDao

const { gameDao: dao } = require('../../daos/dao')


router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// count
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

// rating
router.get('/rating/:rating', (req, res)=> {
    dao.findbyRating(res, req.params.rating)
})



//findbyGames
router.get('/findgames', (req, res)=> {
    dao.findGames(res, dao.table, req.params.id)
})

// //findSystem
// router.get('/system', (req, res)=> {
//     dao.findSystem(res, dao.table)
// })


//findbyId
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

//findSystem
router.get('/system', (req, res)=> {
    dao.findSystem(res, dao.table)
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