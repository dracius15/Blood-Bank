var mysql=require("mysql2");

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Div@m123",
    database:"employeedatabase"
});

con.connect(function(error){
    if(error) throw error;
    console.log("CONNECT");
    con.query("select * from employeetable",function(error,result){
        if (error) throw error;
        console.log(result);
    })
});
module.exports =con;