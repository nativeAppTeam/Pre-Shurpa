const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('bod')

app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));



mongoose.connect('mongodb://nmarentes:beekeepers17@ds049211.mlab.com:49211/nativeapp')
//csassessment:codesmith@localhost:5432/tester'

let db = mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});

db.on('error', console.error.bind(console, 'connection error: '));

let itinerarySchema = new mongoose.Schema({
    author: String,
    authorLocation: String,
    stop1placeName: String,
    stop1location: String,
    stop1description: String,
    stop2placeName: String,
    stop2location: String,
    stop2description: String,
    stop3placeName: String,
    stop3location: String,
    stop3description: String
})

let Itinerary = mongoose.model('Itinerary', itinerarySchema);

// let exampleItin = new Itinerary({
//     author: 'nikol',
//     authorLocation: 'Mar Vista',
//     stop1placeName: '800 degrees pizza',
//     stop1location: 'mar vista',
//     stop1description: 'pizza shop',
//     stop2placeName: 'whole foods',
//      })

exampleItin.save(function(err, exampleItin){
  if(err) return console.error(err)
})

app.post('/create', function(req, res) {
    itinerary.create({
        author: req.author,
        location: req.location,
        description: req.description,
        stop1placeName: req.stop1placeName,
        stop1location: req.stop1location,
        stop1description: req.stop1description,
        stop2placeName: req.stop2placeName,
        stop2location: req.stop2location,
        stop2description: req.stop2description,
        stop3placeName: req.stop3placeName,
        stop3location: req.stop3location,
        stop3description: req.stop3description,
        stop4placeName: req.stop3placeName,
        stop4location: req.stop3location,
        stop4description: req.stop3description
    })
})


app.get('/', function(req, res) {
    res.status(200).type('html')
    res.sendFile(path.join(__dirname, './index.html'))
})




app.listen(3000, () => {
    console.log('Listening on port 3000');
});



//mongoose
// 

// 

// mongoose.connect(itinDB);

// app.post('/create', function(req,res){
//   itinDB.create({
//     author: String,
//     location: String,
//     description: String
//   })
// })


// app.get('/', function(req,res){
//   itinDB.find({}, )
//   res.status(200).type('html')
//   res.sendFile(path.join(__dirname,'./index.html'))
// })

