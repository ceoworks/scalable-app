var express = require('express');
var app = express();
var routes = require('./routes');
var errorHandlers = require('./middleware/errorHandlers');
var log = require('./middleware/log');
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
// var RedisStore = require('connect-redis')(session);
var csrf = require('csurf');
var utils = require('./middleware/utilities');

app.set('view engine', 'ejs');
app.set('view options', { defaultLayout: 'layout' });
app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser('secret'));
app.use(session({
	saveUninitialized: true,
	resave: true,
	// store: new RedisStore({
	// 	url: 'redis://localhost'
	// }),
	secret: 'secret'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(csrf());
app.use(utils.csrf);

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function (req, res, next) {
	next(new Error('A contrived error.'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);
app.listen(3000);
console.log('App server running on port 3000');
