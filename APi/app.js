var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var membersRouter = require('./routes/members');
var newsRouter = require('./routes/news');
//狒
var testRouter = require('./routes/customization');
var muiseRouter = require('./routes/custommuise');
var thingRouter = require('./routes/customthing');
//TORO
var goodsRouter = require("./routes/goods");
var products_brandRouter = require("./routes/products_brand");
var goods_listRouter = require("./routes/goods_list");


var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', membersRouter);
app.use('/api', newsRouter);
app.use('/api', testRouter);
app.use('/api', muiseRouter);
app.use('/api', thingRouter);
//TORO
app.use("/api", goodsRouter);
app.use("/api", products_brandRouter);
app.use("/api", goods_listRouter);


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
