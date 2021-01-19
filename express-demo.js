var express=require('express');
var morgan =require('morgan');
var app=express();

var server =app.listen(3000, function(){
  console.log('node server running');
})

app.use(morgan());
app.get('/api/users', function(req,res){
  var users=[];
  console.log(req.query.search); //can do just (req.query) also
  res.send(JSON.stringify(users));
})

app.get('/api/user/:id', function(req,res){
  res.send('user id is '+req.params.id); //params gets the path
})

app.post('/api/user/:id', function(req,res){
  res.send('user id is'+req.params.id);
})

app.put('/api/user/:id', function(req,res){//update
  res.send('user id is'+req.params.id);
})

app.delete('/api/user/:id', function(req,res){
  res.send('user id is'+req.params.id);
})

//run node express-demo.js go to localhost:3000/api
//test in browser next http://localhost:3000/api/users?name=victor

//ouput is in command line
//1 - - [Wed, 20 Nov 2019 20:04:50 GMT] "GET /api/users?name=victor HTTP/1.1" 200 2 "-"
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"


//to get userID http://localhost:3000/api/user/1


//now go to postman POST http://localhost:3000/api/user/3 to post user value
