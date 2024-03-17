const express= require('express');
const mysql2 = require('mysql2');
const project=express();
 const path = require ('path');
 const pug = require('pug');
 project.set('view engine', 'pug')
// project.set('view engine', 'ejs')
// project.engine('ejs', require('ejs').renderFile);
project.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
project.set('views', path.join(__dirname, 'views'))

const db=  mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Div@m123',
    database:'BLOODBANK1'

})

db.connect(function(error){
    if (error) throw error;
    console.log("CONNECTED");
})




// project.get('/createddb',function(req,res){
//     var sql="CREATE DATABASE BLOODBANK";
//     db.query(sql,function(error,result){
//         if(error) throw error;
//         res.send("Database CREATED");
//         console.log(result);
//     })
// })

// project.get('/inserttable1',function(req,res){
//     var sql='CREATE TABLE Hospital (HospitalID int primary key,Name varchar(255) ,Patient varchar(255), Contact_Number bigint);';
//     db.query(sql,function(error,result){
//         if(error) throw error;
//         res.send("Created table Hospital");
//         console.log(result);
//     })
// })

// project.get('/inserttable2',function(req,res){
//     var sql='CREATE TABLE Patient (PatientId int primary key,Patient_Name varchar(255) ,Patient_Contact bigint,Hospital_ID int,Doctor_ID bigint,FOREIGN KEY (Hospital_ID) REFERENCES Hospital(HospitalID),FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID));'
//     db.query(sql,function(error,result){
//         if(error) throw error;
//         res.send("Created table Patient");
//         console.log(result);
//     })
// })

// project.get('/inserttable3',function(req,res){
//     var sql="Create table BloodBank (Blood_Bank_ID bigint primary key, Issues boolean, Orders bigint , Blood_Type varchar(10));";
//     db.query(sql,function(error,result){
//         if(error) throw error;
//         res.send("Table Created");
//         console.log(result);
//     })
// })

// project.get('/inserttable4',function(req,res){
//     var sql="Create table Donor (Donor_ID bigint primary key, Donor_Name varchar(255), DOB date , Contact_Number bigint, Blood_Type varchar(255),FOREIGN KEY (Blood_Type) REFERENCES Blood(Blood_Type));";
//     db.query(sql,function(error,result){
//         if(error) throw error;
//         res.send("Table Created");
//         console.log(result);
//     })
// })

// project.get('/inserttable5',function(req,res){
//     var sql='CREATE TABLE Doctor (Doctor_ID bigint primary key, Doctor_Name varchar(255),Blood_Bank_ID bigint ,Contact_Number bigint,FOREIGN KEY (Blood_Bank_ID) REFERENCES BloodBank(Blood_Bank_ID));'
//     db.query(sql,function(error,result){
//         if (error) throw error;
//         console.log(result);
//         res.send("TABLE CREATED")
//     })
// })

// project.get('/inserttable6',function(req,res){
//     var sql='CREATE TABLE Blood (Blood_ID bigint, Blood_type varchar(255) primary key);'
//     db.query(sql,function(error,result){
//         if (error) throw error;
//         console.log(result);
//         res.send("TABLE CREATED")
//     })
// })

project.use(express.json());
project.use(express.urlencoded());
// project.use(express.static('public'))

project.get('/form',function(req,res){

    res.sendFile(__dirname+'/project.html');
});

project.get('/project.html',function(req,res){

    res.sendFile(__dirname+'/project.html');
});

// project.get('/hospital.html',function(req,res){

//     res.sendFile(__dirname+'/hospital.html');
// });

project.get('/patient.html',function(req,res){

    res.sendFile(__dirname+'/patient.html');
});



project.get('/bloodbank.html',function(req,res){

    res.sendFile(__dirname+'/bloodbank.html');
});

project.get('/Donor.html',function(req,res){

    res.sendFile(__dirname+'/Donor.html');
});

// project.get('/Doctor.html',function(req,res){

//     res.sendFile(__dirname+'/Doctor.html');
// });

project.get('/Orders.html',function(req,res){

    res.sendFile(__dirname+'/Orders.html');
});

// project.get('/Delivers.html',function(req,res){

//     res.sendFile(__dirname+'/Delivers.html');
// });

project.get('/Donates_Blood_Stored.html',function(req,res){

    res.sendFile(__dirname+'/Donates_Blood_Stored.html');
});

// project.post('/formPost',function(req,res){
//     var contents=(req.body);
//     let sql="INSERT INTO Hospital SET ?"
//     let query = db.query(sql,contents,function(error,result)
//     {
//         if(error) throw error;
//         res.send("query added");
//         console.log(result);
//     })

//     console.log(req.body);

// })



project.post('/formPost2',function(req,res){
    var contents=(req.body);;
    let sql="INSERT INTO PATIENT SET ?"
    let query = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        res.sendFile(__dirname+'/thankyou.html');
        console.log(result);
    })

    console.log(req.body);

})

// project.post('/formPost3',function(req,res){
//     var contents=(req.body);
//     let sql="INSERT INTO BloodBank SET ?"
//     let query = db.query(sql,contents,function(error,result)
//     {
//         if(error) throw error;
//         res.send("query added");
//         console.log(result);
//     })

//     console.log(req.body);

// })

project.post('/formPost4',function(req,res){
    var contents=(req.body);;
    let sql="INSERT INTO DONOR SET ?"
    let query = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        res.sendFile(__dirname+'/thankyou.html');
        console.log(result);
    })

    console.log(req.body);

})

//  project.get('/formPost8',function(req,res){
//      var sql='UPDATE BLOODBANK b JOIN (SELECT BLOOD_TYPE, SUM(units) AS total_units FROM DONATES_BLOOD_STORED GROUP BY BLOOD_TYPE) d ON b.BLOOD_TYPE = d.BLOOD_TYPE SET b.UNITS = b.UNITS + d.total_units;'
//      db.query(sql,function(error,result){
//          if (error) throw error;
//          console.log(result);
//          res.send("BLOODBANK Updated")
//      })
//  })



// project.post('/formPost5',function(req,res){
//     var contents=(req.body);
//     let sql="INSERT INTO Doctor SET ?"
//     let query = db.query(sql,contents,function(error,result)
//     {
//         if(error) throw error;
//         res.send("query added");
//         console.log(result);
//     })

//     console.log(req.body);

// })

// project.post('/formPost6',function(req,res){
//     var contents=(req.body);
//     let sql="INSERT INTO Delivers SET ?"
//     let query = db.query(sql,contents,function(error,result)
//     {
//         if(error) throw error;
//         res.send("query added");
//         console.log(result);
//     })

//     console.log(req.body);

// })

project.post('/formPost7',function(req,res){
    var units=(req.body.UNITS);
    var blood_type=(req.body.BLOOD_TYPE);
    var values=[units,blood_type];
    let query1=db.query('update BLOODBANK set UNITS=UNITS-? WHERE BLOOD_TYPE=?',values,function(error,result){
        if(error) throw error;
        console.log(result);
    })
    var contents=(req.body);
    let sql="INSERT INTO ORDERS SET ?"
    let query2 = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        res.sendFile(__dirname+'/thankyou.html');
        console.log(result);
    })

    console.log(req.body);

})

project.post('/formPost8',function(req,res){
    var units=(req.body.UNITS);
    var blood=(req.body.BLOOD_TYPE);
    var VALUES=[units,blood];
    var contents=(req.body);
    let sql="INSERT INTO DONATES_BLOOD_STORED SET ?"
    let query = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        console.log(result);
    })

    let query2 = db.query("update BLOODBANK set UNITS = UNITS + ? WHERE BLOOD_TYPE = ?",VALUES,function(error,result){
        if(error) throw error;
        console.log(result);
        res.sendFile(__dirname+'/thankyou.html');
    })

    console.log(req.body);

})

// project.post('/formPost',function(req,res){
//     var contents=(req.body);
//     let sql="INSERT INTO Hospital SET ?"
//     let query = db.query(sql,contents,function(error,result)
//     {
//         if(error) throw error;
//         res.send("query added");
//         console.log(result);
//     })

//     console.log(req.body);

// })

project.get('/formPost2', function(request, response){
    console.log('GET request received at /formPost2') 
    db.query("SELECT * FROM PATIENT", function (err, result) {
        if (err) throw err;
        response.send(result);

    });
});

project.get('/formPost4', function(request, response){
    console.log('GET request received at /formPost4') 
    db.query("SELECT * FROM DONOR", function (err, result) {
        if (err) throw err;
        response.send(result);

    });
});

project.get('/formPost7', function(request, response){
    console.log('GET request received at /formPost7') 
    db.query("SELECT * FROM ORDERS", function (err, result) {
        if (err) throw err;
        response.send(result);

    });
});

// project.get('/formPost8', function(request, response){
//     console.log('GET request received at /formPost8') 
//     db.query("SELECT * FROM DONATES_BLOOD_STORED", function (err, result) {
//         if (err) throw err;
//         response.send(result);

//     });
// });

project.post('/', function(req,res){
    db.query('SELECT * FROM BLOODBANK', function(req,results){
        res.render('bloodbank',{BLOODBANK_DATA:results})
    })
})

project.post('/2', function(req,res){
    db.query('SELECT * FROM DONOR', function(req,results){
        res.render('donor',{donor:results})
    })
})

project.post('/3', function(req,res){
    db.query('SELECT * FROM DONATES_BLOOD_STORED', function(req,results){
        res.render('donation',{donation:results})
    })
})

project.post('/4', function(req,res){
    db.query('SELECT * FROM PATIENT', function(req,results){
        res.render('patient',{patient:results})
    })
})

project.post('/5', function(req,res){
    db.query('SELECT * FROM ORDERS', function(req,results){
        res.render('orders',{orders:results})
    })
})




project.listen('5000',function(){
    console.log("Connection made at port 5000");
})

