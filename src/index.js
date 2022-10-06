require('dotenv').config()
const mongoose =require('mongoose')
const express = require( 'express' )
const app = express()
const port = process.env.port
// const userRouter =
// require('./resources/user/user.controller')
const connect = require('./requests/utilities/connect')
const middleware = require('./requests/utilities/middleware')

const PORT = 3003

app.use(express.json())
app.use(middleware.requestLogger)


try {
	connect() // Invoking the connect function
	console.log('connected to MongoDB')
} catch (error) {
	console.log('error connection to MongoDB:', error.message)
}

//app.use('/api/user/', userRouter)

app.use( middleware.unknownEndpoint )


app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`)
})