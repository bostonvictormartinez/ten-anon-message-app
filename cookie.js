var express=require('express');

var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());

app.get('/listcookies', function(req,res){
  console.log('cookies', req.cookies);
  res.cookie('token', '12423412341241234');
  res.send(req.cookies);
})

app.listen(3000);

//once this is run, it is listening go to localhost:3000/listcookies
// output will be token:12423412341241234
