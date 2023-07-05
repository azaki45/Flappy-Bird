const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const port = 5000;

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})