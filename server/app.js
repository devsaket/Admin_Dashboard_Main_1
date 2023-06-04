const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

// Database Connection 
const connectDB = require('./database/connection')

const app = express()

app.use(cors())
app.use(express.json())


dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 5000


// log requests
app.use(morgan('tiny'))


// parse requests to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// Mongoose Link
connectDB()


// routes 
app.use('/', require('./routes/user_route'))



app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})