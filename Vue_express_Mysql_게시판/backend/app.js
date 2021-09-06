var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const bodyParser = require("body-parser");

var app = express();
// DB 연결 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'pwa_crud'
});
// DB 연결 완료
connection.connect(function(err){
if(err){
  console.error('mysql connetion error');
  console.error(err);
  throw err;
}
console.log("db 전체 연결");
});
// DB 로그인 세션 설정
var options = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'pwa_crud'
}
// db 세션 설정
var sessionStore = new MySQLStore(options);
app.use(session({
secret: '!@#$%^&*',
resave: false,
saveUninitialized: true,
store: sessionStore,
cookie:{
  maxAge: 24000 * 60 * 60
}
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use(bodyParser.urlencoded({extended:false}));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
