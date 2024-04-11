const express = require('express');
const server = express();
const connection = require('./models/dbConection.js')




// connection.query('SELECT * FROM products', function(err, rows, fields){
//     if(!err){
//         console.log(rows)
//     }
// });

// const values = `"BLUSA DA versace","http://localhost:3001/public/productsIMG/blusa_tommy_basic.JPG","formal"`

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

server.get('/types',(req,res)=>{
    
    connection.query(`SELECT * FROM products WHERE type = "${req.query.type}"`, function(err, rows, fields){
        if(!err){
            res.send(rows)
        }
    });
})

server.get('/category',(req,res)=>{
    switch (req.query.nome) {
        case 'basics':
            res.sendFile(__dirname+'/pages.html');
            break;
        case 'formal':
            res.sendFile(__dirname+'/pages.html');
            break;
        case 'freestyle':
            res.sendFile(__dirname+'/pages.html');
            break;
        default:
            res.send('404 not found');
    }
    
})


server.listen(3001, ()=>{
    console.log('servidor iniciado na porta 3001')
})