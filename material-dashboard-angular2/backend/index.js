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


/*db.query(`SELECT programador FROM startup WHERE nome_programador = 'Paula Silva'`, function(err, tables){ 
    console.log(tables);
});*/

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

    let id_programador = req.body.id_programador;
    let id_startup = req.body.id_startup;
    let nome_programador = req.body.nome_programador;
    let genero = req.body.genero;
    let data_nascimento = req.body.data_nascimento;
    let email = req.body.email;

    let qr = `insert into programador(id_programador, id_startup, nome_programador, genero, data_nascimento, email) 
                values ('${id_programador}', '${id_startup}', '${nome_programador}', '${genero}', '${data_nascimento}','${email}')`;

    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        console.log(result,'result');
        res.send({
            massage:'Dados inseridos'
        });
    })
})

//update single data

app.put('/programador/:id',(req,res)=>{

    console.log(req.body,'updatedata');

    let gID = req.params.id;
    let id_startup = req.body.id_startup;
    let nome_programador = req.body.nome_programador;
    let genero = req.body.genero;
    let data_nascimento = req.body.data_nascimento;
    let email = req.body.email;
    
    let qr = `update programador set id_startup = '${id_startup}', nome_programador =  '${nome_programador}', genero = '${genero}', data_nascimento = '${data_nascimento}', email = '${email}'
            where id_programador = '${gID}'`;

    db.query(qr,(err,result)=>{
        
        if(err) {console.log(err);}

        res.send({
            message:'data update'
        });
    })
})

// Teste no Postman - Selecione Get(retorno), Post(adicionar informações), Put(atualizar), Delete
// Body -> raw -> Json e pode começar a testar.
/*
{
    "id_startup":"10003",
    "nome_programador":"tim",
    "genero":"F",
    "data_nascimento":"1996-06-12",
    "email":"timsilva@mail.com"
}
*/

app.delete('/programador/:id',(req,res)=>{
    
    let qID = req.params.id;

    let qr = `delete from programador where id_programador = '${qID}'`;
    db.query(qr,(err,result)=>{
        if(err) {console.log(err);}

        res.send(
            {
                message:'data deleted'
            }
        )
    })
})



app.listen(3000,()=>{
    console.log("server running...");
});
