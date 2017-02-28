var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
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

// The view page source out is pretty
if(app.get('env') === 'development') {
  app.locals.pretty = true;
}
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

var port = 3000;
app.listen(port);
console.log("*** Listening to http://localhost:" + port);
