const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://nmarentes:beekeepers17@ds049211.mlab.com:49211/nativeapp')
//csassessment:codesmith@localhost:5432/tester'

let db = mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});

db.on('error', console.error.bind(console, 'connection error: '));

let itinerarySchema = new mongoose.Schema({
    title: String,
    author: String,
    authorLocation: String,
    authorZip: String,
    stop1placeName: String,
    stop1location: String,
    stop1description: String,
    stop2placeName: String,
    stop2location: String,
    stop2description: String,
    stop3placeName: String,
    stop3location: String,
    stop3description: String,
    stop4placeName: String,
    stop4location: String,
    stop4description: String
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

// exampleItin.save(function(err, exampleItin){
//   if(err) return console.error(err)
// })

app.post('/create', function(req, res) {
    res.send(req.body);
    console.log(req.body);
    let newItin = new Itinerary({
        title: req.body.title,
        author: req.body.author,
        authorLocation: req.body.authorLocation,
        authorZip: req.body.authorZip,
        description: req.body.description,
        stop1placeName: req.body.stop1placeName,
        stop1location: req.body.stop1location,
        stop1description: req.body.stop1description,
        stop2placeName: req.body.stop2placeName,
        stop2location: req.body.stop2location,
        stop2description: req.body.stop2description,
        stop3placeName: req.body.stop3placeName,
        stop3location: req.body.stop3location,
        stop3description: req.body.stop3description,
        stop4placeName: req.body.stop4placeName,
        stop4location: req.body.stop4location,
        stop4description: req.body.stop4description
    })
    newItin.save(function(err, exampleItin){
      if(err) return console.error(err)
    })
})


app.get('/itins', function(req, res) {
  Itinerary.find({}, function(err, itins){ console.log(itins); res.send(itins)});
})

//BELOW UNDER CONSTRUCTION 
app.get('/itins/:cord', function(req, res) {
  Itinerary.find({}, function(err, itins){ console.log(itins); res.send(itins)});
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

