require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI

const connect = () => { mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("MongoDb Atlas status: Conectado!")
    })
    .catch((error)=>{
        console.error(error)
    })
}

module.exports = { connect }