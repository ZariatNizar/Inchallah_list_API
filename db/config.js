const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user:user@cluster0.yazyn.mongodb.net/inchallahListDb?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })

module.exports = mongoose