const express = require('express')
const path = require('path')

const userRoutes = require('./routes/user')
const workoutsRoutes = require('./routes/workouts')
const quotesRoutes = require('./routes/quotes')
const userProfileRoutes = require('./routes/userprofile')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/workouts', workoutsRoutes)
server.use('/api/v1/quotes', quotesRoutes)
server.use('/api/v1/userprofile/', userProfileRoutes)

module.exports = server
