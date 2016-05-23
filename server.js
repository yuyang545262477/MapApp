/*
 * Dependencies
 * */

var express = require('express'),
    mongoose = require('mongoose'),
    port = process.env.port || 3000,
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express();

/*
 * Express Configuration
 * */

//  sets the connect to MongoDB
mongoose.connect('mongodb://localhost/MeanMapApp');

// loading and parsing

app.use(express.static(__dirname + '/public')); //设置静态文件
app.use('/bower-components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());


app.listen(port);
console.log(' app running : ', port);







