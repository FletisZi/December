const express = require('express');
const server = express();
const connection = require('./models/dbConection.js')
const produto = require('./models/product.js')




// connection.query('SELECT * FROM products', function(err, rows, fields){
//     if(!err){
//         console.log(rows)
//     }
// });

// const values = `"BLUSA DA versace","http://localhost:3001/public/productsIMG/blusa_tommy_basic.JPG","formal"`

//INSERT INTO products (description, imgURL, type) VALUES ('Camiseta básica da lacoste na cor branca P,M,G,GG','http://77.37.43.91:3001/public/productsIMG/basic_lacoste.jpg','basics');

// connection.query(`INSERT INTO products (description, imgURL, type) VALUES (${values})`, function(err, rows, fields){
//     if(!err){
//         console.log('CADASTRADO COM SUCESSO')
//     }
// });



server.use('/public', express.static(__dirname + '/public'));

server.get('/',(req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

server.get('/produto',(req,res)=>{
    req.query.id

    connection.query(`SELECT * FROM products WHERE id = "${req.query.id}"`, function(err, rows, fields){
        if(!err){
            itemArray = rows[0]
            res.send(produto(itemArray.imgURL,itemArray.description, itemArray.id));
        }
    });


    // 
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