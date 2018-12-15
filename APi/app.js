var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//水晶
var newsRouter = require('./routes/news');
//狒
var testRouter = require('./routes/customization');
var muiseRouter = require('./routes/custommuise');
var thingRouter = require('./routes/customthing');
//TORO
var goodsRouter = require("./routes/goods");
var products_brandRouter = require("./routes/products_brand");
var goods_listRouter = require("./routes/goods_list");
//鄒
var cartRouter = require("./routes/cart");
//君
var sessionRouter = require('./routes/session');
var membersRouter = require('./routes/members');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3001",
    credentials:true,
    Headers:"Origin,X-Requested-With, Content-Type, Accept"
}));

// session設定
app.use(session({
    secret:"jeanculturl",
    resave: true,
    saveUninitialized: true,
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//水晶
app.use('/api', newsRouter);
//狒
app.use('/api', testRouter);
app.use('/api', muiseRouter);
app.use('/api', thingRouter);
//TORO
app.use("/api", goodsRouter);
app.use("/api", products_brandRouter);
app.use("/api", goods_listRouter);
//鄒
app.use("/api", cartRouter);
//君
app.use('/api', sessionRouter);
app.use('/api', membersRouter);


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
