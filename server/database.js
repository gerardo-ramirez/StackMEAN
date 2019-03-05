const mongoose = require('mongoose');

mongoose.connect('mongodb://den1.mongo1.gear.host:27001/taskcoderhouse',{ useNewUrlParser: true , user: "taskcoderhouse", pass:"Fx71?WmBVg!O",} )
.then (db => console.log('db is connected'))
.catch(err => console.log('error in the database'));

module.exports = mongoose;