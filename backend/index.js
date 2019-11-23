const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGO_KEY = "mongodb+srv://danielfo:corvettez6@api-robles-dg4ck.mongodb.net/socialmean?retryWrites=true&w=majority"

mongoose.connect(MONGO_KEY, {
     useCreateIndex: true,
     useNewUrlParser: true,
     useFindAndModify: false,
     useUnifiedTopology: true
})
.then(() => console.log('DB Connected'))
.catch(err => console.log(err))


