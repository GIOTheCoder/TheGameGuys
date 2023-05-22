const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000


const { contactDao: dao } = require('../../daos/dao')


router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})


router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})


router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})


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