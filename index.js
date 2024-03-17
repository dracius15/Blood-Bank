var express= require('express');
var app= express();

app.get('/', function(req,res)
{
    res.send(__dirname+'/register.html');
});

app.post('/',function(req,res)
{
    
})