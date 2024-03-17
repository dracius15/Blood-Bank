const express= require('express');
const mysql2 = require('mysql2');
const form=express();

const db =mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Div@m123',
    database:'employee'
})

form.listen('4000',function(){
    
    console.log('Database connected at 4000')
})

form.get('/form.html',function(req,res){
    res.sendFile(__dirname+'/form.html')
})

form.post("/formpost",function(req,result){
    var contents=(req.body);
    let sql="INSERT INTO employee_table(emp_name,base_pay,da,hra) values"
    // let query2 = db.query(sql,contents,function(error,result)
    // {
    //     if(error) throw error;
    //     console.log(result);
    // })

    console.log(req.body);

})
