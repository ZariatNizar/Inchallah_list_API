
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('./db/config')

const userController = require('./controllers/userController')
const taskController = require('./controllers/taskController')

const app = express()

app.use(bodyParser.json())
app.use('/user', userController)
app.use('/task', taskController)

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send("Welcome to server !")
})

app.listen(port, () => { console.log("serveur started") })


































































/*
app.get('/abc', (req, res) => {
    let obj = {
        message: "API WORKS"
    }
    res.status(200).send(obj)
})

app.get('/hello/:username', (req, res) => {
    let name = req.params.username
    let obj = {
        message: "hello " + name
    }
    res.status(200).send(obj)
})

app.post('/add', (req, res) => {
    let data = req.body
    console.log(data)
    res.status(200).send({ msg: "user added" })
})
*/