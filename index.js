var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')
;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/public');
app.set('view engine', 'pug');

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// The view page source is pretty
if(app.get('env') === 'development') {
  app.locals.pretty = true;
}
app.use(express.static(__dirname + '/public'));

app.get('/partials/*', function(req, res) {
    res.render('../public/app/' + req.params[0]);
});

var port = 3000;
app.listen(port);
console.log("*** Listening to http://localhost:" + port);



var dbHost = 'mongodb://localhost/',
    dbName = 'meanApp';
mongoose.Promise = global.Promise;
mongoose.connect(dbHost + dbName);
var db = mongoose.connection;
// var db = mongoose.connect('mongodb://aw101:html5js@ds011331.mlab.com:11331/aw101');
db.on('error', console.error.bind(console, ' connection error'));
db.once('open', function callback() {
    console.log('--- MongoDB database connected at ' + dbHost);
    console.log('------- Database opened ' + dbName);
});
var msgSchema = mongoose.Schema({message:String});
var Msg = mongoose.model('Message', msgSchema);
var mongoMsg;
Msg.findOne().exec(function(err, msgDoc) {
    if(err){
        // return res.json({error: "Error fetching " + model.toString()});
        mongoMsg = err.toString();
    }
    else
        mongoMsg = msgDoc.message;
});


app.get('/', function(req, res) {
    console.log(mongoMsg);
    res.render('index',  {
        mongoMsg: mongoMsg
    });
});
