const express = require('express');
const colors = require('colors')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware')

// Middle ware

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Connect Database
connectDB();

const port = process.env.PORT || 5000

// Define routes

app.use('/api/students',require('./Routes/studentsroutes'))
app.use('/api/parents',require('./Routes/parentsroutes'))
app.use('/api/teachers',require('./Routes/teachersroutes'))
app.use('/api/auth',require('./Routes/auth'))

app.use(errorHandler)
app.listen(port,() => console.log(`Server started on port ${port}`))
