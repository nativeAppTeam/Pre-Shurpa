const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ***DATABASE SETUP***

// Using a Hosted MongoDB @ https://mlab.com/ account.
// You can use login info below to access mlab.com portal to add additional user accounts.
mongoose.connect('mongodb://nmarentes:beekeepers17@ds049211.mlab.com:49211/nativeapp')

let db = mongoose.connection.once('open', () => {
    console.log('Connected to mongodb with mongoose');
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
// ***END OF DATABASE SETUP ***

// GET request to /itins serves up ALL itins in DB. You can also see at http://localhost:3000/itins
app.get('/itins', function(req, res) {
  Itinerary.find({}, function(err, itins){res.send(itins)});
});

app.post('/create', function(req, res) {
    console.log("Post REQ BODY:", req.body);
    Itinerary.create(new Itinerary(req.body), function(err, created) {
      if(err) return console.error(err);
      res.send(req.body);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


