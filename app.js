var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user')
const hbs = require('hbs');
var moment = require('moment');
moment().format();
hbs.registerPartials(__dirname + '/views/partials');

// Routers
var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var authRouter = require('./routes/auth');
var profileRouter = require('./routes/profile');
// var noPageRouter = require('./routes/nopage');
var createProjectRouter = require('./routes/project-create');
var projectsRouter = require('./routes/projects');
var usersRouter = require('./routes/users');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + 'views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser('SecretKeyVersionUltra'));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/colab', {
  useNewUrlParser: true
}, (err) => {
  err ? console.log(err) : console.log('Connected to mongodb');
})

//Routers
app.use('/auth/*', authRouter);
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/auth/profile', profileRouter);
app.use('/projects', projectsRouter);
app.use('/project-create', createProjectRouter);
app.use('/users', usersRouter);

// app.use('/*', noPageRouter); //404 handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;