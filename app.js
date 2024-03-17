// const express= require('express');
// const mysql2 = require('mysql2');

// const db= mysql2.createConnection({
//     host:"localhost",
//     user : "root",
//     password : "Div@m123",
//     database : "employeedatabase"
// });

// db.connect(function(error){
//     if (error) throw error;
//     console.log("CONNECTED");
// })

// const app= express();

// //create database

// // app.get('/createdb',function(req,res){
// //     let sql="CREATE DATABASE nodemysql";
// //     db.query(sql,function(error,result){
// //         if (error) throw error;
// //         res.send("DATABASE CREATED..")
// //         console.log(result);
// //     })
// // })

// //Create table
// // app.get('/createposttable',function(req,res){
    
// //     let sql="CREATE TABLE posts(id int primary key, title varchar(255), body varchar(255));";
// //     db.query(sql,function(error,result){
// //         if(error) throw error;
// //         console.log(result);
// //         res.send("Table CREATED");
// //     })
// // })
// // //insert postdata
// // app.get('/postdata',function(req,res){
// //     let sql="INSERT INTO posts (id,title,body) VALUES(1,'Perscy Jackson','Hello World');"
// //     db.query(sql,function(error,result)
// //     {
// //         if(error) throw error;
// //         res.send("Post CREATED");
// //         console.log(result);
// //     })
// // })

// // //insert postdata
// // app.get('/postdata2',function(req,res){
// //     let post= {id:2,title:'Post One', body:'THis is post number one'};
// //     let sql="INSERT INTO posts SET ?"
// //     let query = db.query(sql,post,function(error,result)
// //     {
// //         if(error) throw error;
// //         res.send("Post 2 CREATED");
// //         console.log(result);
// //     })
// // })

// // app.listen('3000', () =>{
// //     console.log("Server started on port 3000");
// // })












// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('NEW FOLDER(2)'));

// // app.get('/inserttable10',function(req,res){
// //     var sql="CREATE TABLE DATA(name varchar(255),email varchar(255), number int)";
// //     db.query(sql,function(error,result){
// //         if (error) throw error;
// //         res.send("Table Created");
// //         console.log(result)
// //     })
// // })

// // app.get('/form',function(req,res){

// //     res.sendFile(__dirname+'/register.html');
// // });


// app.post('/formPost',function(req,res){
//     var contents=(req.body);
//     let sql="INSERT INTO DATA SET ?"
//     let query = db.query(sql,contents,function(error,result)
//     {
//         if(error) throw error;
//         res.send("query added");
//         console.log(result);
//     })

//     console.log(req.body);

// })











// db.query("SELECT * FROM posts",function(error,result){
// if (error) throw error;
// console.log(result);
// })



