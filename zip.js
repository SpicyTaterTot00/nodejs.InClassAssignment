let express = require('express');
let bodyParser= require('body-parser');
let mongoose = require('mongoose');
const ToDo = require('./models/todo.model');
const Zip = require('./models/zip.model')

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : true}));
//app.use(express.static('public'));


//Connection to Mongo
const mongoDB = 'mongodb+srv://admin:admin@cluster0.q756k.mongodb.net/zip?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise= global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:  '));


app.get('/zip', function(request, response){
    
           
 })

