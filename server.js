const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));



mongoose.connect('mongodb://localhost/nativeapp')
//csassessment:codesmith@localhost:5432/tester'

let db = mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ORM - mongodb-orm');
});

db.on('error', console.error.bind(console, 'connection error: '));

let itinerarySchema = new mongoose.Schema({
  author: String,
  authorLocation: String,
  stop1placeName:String,
  stop1location: String,
  stop1description: String,
  stop2placeName:String,
  stop2location: String,
  stop2description: String,
  stop3placeName:String,
  stop3location: String,
  stop3description: String
  })

let itinerary = mongoose.model('itinerary', itinerarySchema);


// app.post('/create', function (req, res) {
//   itinerary.create({
//     author: req.author,
//     location: req.location,
//     description: req.description
//   })
// })


app.get('/', function(req,res){
  res.status(200).type('html')
  res.sendFile(path.join(__dirname,'./index.html'))
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

