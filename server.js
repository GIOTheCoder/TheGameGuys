const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

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

server.set('view engine', 'ejs')


server.listen(PORT, ()=> console.log(`${PORT} is RUNNING.`))