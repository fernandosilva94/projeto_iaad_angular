const express = require('express');
const bodyparser = require('body-parser');
const cors =  require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(bodyparser.json());

// database connection

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'startup',
    port:3306
});

// check database connection

db.connect(err=>{
    if (err) {console.log('err');}
    console.log('database conected...')
})

// get all data

app.get("/programador",(req,res)=>{

    let qr = `select * from programador`;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    })
});

// get all data linguagem

app.get("/linguagem_programacao",(req,res)=>{

    let qr = `select * from linguagem_programacao`;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    })
});

// get all data startup

app.get("/startup",(req,res)=>{

    let qr = `select * from startup`;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    })
});

//get single data

app.get("/programador/:id",(req,res)=>{

    let gID = req.params.id;

    let qr = `select * from programador where id_programador = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}
        
        if(result.length>0)
        {
            res.send({
                massage:'get single data',
                data:result
            });
        }
        else 
        {
            res.send({
                message:'data not found'
            })
        }
    });

});

// create data

app.post('/programador',(req,res)=>{

    console.log(req.body,'add dados');

    let id_linguagem = req.body.id_linguagem;
    let id_startup = req.body.id_startup;
    let nome_programador = req.body.nome_programador;
    let genero = req.body.genero;
    let data_nascimento = req.body.data_nascimento;
    let email = req.body.email;

    let qr = `CALL STP_INSERT_PROG_LINGUAGEM ('${id_linguagem}', '${id_startup}', '${nome_programador}', '${genero}', '${data_nascimento}', '${email}')`;

    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        console.log(result,'result');
        res.send({
            message:'Dados inseridos'
        });
    })
})

//update single data

app.put('/programador/:id',(req,res)=>{

    console.log(req.body,'updatedata');

    let getIdProgramador = req.params.id;
    let id_linguagem = req.body.id_linguagem;
    let nome_linguagem = req.body.nome_linguagem;
    let id_startup = req.body.id_startup;
    let nome_programador = req.body.nome_programador;
    let genero = req.body.genero;
    let data_nascimento = req.body.data_nascimento;
    let email = req.body.email;

    let qr = `CALL STP_UPDATE_PROG_LINGUAGEM ('${id_linguagem}', '${id_startup}', '${nome_programador}', '${genero}', '${data_nascimento}', '${email}')`;

    db.query(qr,(err,result)=>{
        
        if(err) {console.log(err);}

        res.send({
            message:'Dados Atualizados'
        });
    })
})

app.delete('/programador/:id',(req,res)=>{
    
    let qID = req.params.id;

    let qr = `delete from programador where id_programador = '${qID}'`;
    db.query(qr,(err,result)=>{
        if(err) {console.log(err);}

        res.send(
            {
                message:'Dados Deletados'
            }
        )
    })
})

app.listen(3000,()=>{
    console.log("server running...");
});
