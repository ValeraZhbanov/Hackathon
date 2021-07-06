
const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors');

const routes = require('./routes'),
    constants = require("./constants");

const app = express()

app.use(express.json())
app.use(cors({credentials: true, origin: '*', }))
app.use(express.urlencoded({extended: true}))
app.use(routes);


(async function start() {
    try {

        await mongoose.connect(constants.MONGO_URL, {
            useNewUrlParser: true,
            useFindAndModify: false,
        })

        app.listen(constants.SERVER_PORT, () => {
            console.log(`Example app listening at ${constants.SERVER_URL}`)
        })

    } catch (e) {
        console.log(e)
    }
})()

