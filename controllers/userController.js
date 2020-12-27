const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('./../models/user')

const app = express()

app.post('/register', async (req, res) => {

    try {
        let data = req.body
        data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))

        let user = new User({
            name: data.name,
            email: data.email,
            password: data.password,
            age: data.age
        })

        await user.save()

        res.status(200).send({ msg: "register" })
    } catch (error) {
        res.status(400).send({ msg: "error" })
    }

})

app.post('/login', async (req, res) => {

    try {

        let data = req.body
        let user = await User.findOne({ email: data.email })

        if (!user) {
            res.status(404).send({ msg: "user not found" })
        }
        else {
            let compare = bcrypt.compareSync(data.password, user.password)


            if (!compare) {
                res.status(404).send({ msg: "user not found" })

            }
            else {
                let token = jwt.sign({ userid: user._id }, "SECRETKEY")
                res.status(200).send({ token })
            }
        }
    } catch (error) {
        res.status(400).send(error)

    }

})

module.exports = app