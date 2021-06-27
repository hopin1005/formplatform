import { useExpressServer } from 'routing-controllers'
import { UserController } from './router/UserController'
import 'reflect-metadata'

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [UserController]
})

// run express application on port 4000
app.listen(4000)
