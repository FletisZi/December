const express = require('express');
const server = express();
const connection = require('./models/dbConection.js')




// connection.query('SELECT * FROM products', function(err, rows, fields){
//     if(!err){
//         console.log(rows)
//     }
// });

// const values = `"BLUSA DA TOMMY","http://localhost:3001/public/productsIMG/blusa_tommy_basic.JPG","basics"`

// connection.query(`INSERT INTO products (description, imgURL, type) VALUES (${values})`, function(err, rows, fields){
//     if(!err){
//         console.log('CADASTRADO COM SUCESSO')
//     }
// });



server.use('/public', express.static(__dirname + '/public'));

server.get('/',(req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

server.get('/produtos',(req,res)=>{
    connection.query('SELECT * FROM products', function(err, rows, fields){
        if(!err){
            res.send(rows)
        }
    });
})


server.listen(3001, ()=>{
    console.log('servidor iniciado na porta 3001')
})