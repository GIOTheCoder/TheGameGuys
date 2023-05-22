const express = require('express')
const server = express()
const PORT = process.env.PORT || 8080

// Security
const helmet = require('helmet')
const cors = require ('cors')

// server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        crossOriginResourcePolicy: false,
        crossOriginEmbedderPolicy: false,
        directives: {
            "img-src": ["'self", "https: data:"]
        }
    })
)

server.post('/contact/create', (req, res)=> {
    console.log(req.body)
})


const router = require('./app/routes/router')
server.use('/', router)
server.listen(PORT, ()=> console.log(`PORT ${PORT} is up`))