const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './client/')));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});



//mongoose
// const mongoose = require('mongoose');

// const itinDB='mongodb://nmarentes:beekeepers17@ds049211.mlab.com:49211/nativeapp'

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

