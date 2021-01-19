var express=require('express');
var morgan=require('morgan');

var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser());//if dont use this cant use request body

app.get('/login', function(req,res){
  var html='<form action="/login" method="post">'+ '<input type="text" name="email">' + '<button type="submit">Submit</button>'+'</form>'

  res.send(html);
});

app.post('/login', function(req,res){
  res.send('welcome ' + req.body.email);//this is two parameters. the results and the body
})
//npm install express, npm install morgan and npm install body-parser
app.listen(3000);

//http://localhost:3000/login

//hit f12 go to network and see request header, response header, status code and remote address

//now set up cookie.js to run before to set cookie with localhost:3000/login

//to set up cookie effectively if doesnt work see nodeV.txt

//now rerun node body-parser.js then submit email and output is email address if you check f12 it is not a GET its now POST and form data is listed
