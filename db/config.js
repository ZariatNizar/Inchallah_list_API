const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://user:user@cluster0.yazyn.mongodb.net/inchallahListDb?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

module.exports = mongoose