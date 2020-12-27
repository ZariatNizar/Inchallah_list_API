const express = require('express')
const app = express()
const mongoose = require('mongoose')

let Task = mongoose.model("tasks",
    {
        description: {
            type: String,
            required : true
        },
        completed: {
            type: Boolean,
            default : false
        },
        owner: {
            type: String,
            required : true
        },
    }
    )
        module.exports = Task 
