import { useExpressServer } from 'routing-controllers'
import { UserController } from './router/UserController'
import { FinalMiddleware } from './middleware/notFoundMiddleware'
import 'reflect-metadata'

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [UserController],
  middlewares: [FinalMiddleware]
})

// run express application on port 4000
app.listen(4000)
