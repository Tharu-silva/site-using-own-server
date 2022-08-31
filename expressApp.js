const express = require('express');
const app = express();
const fs = require('fs/promises');
const port = 8080;

app.get('/', async function(req,res) {
    const file = await fs.readFile('./index.html', { encoding: 'utf8' })
    // The HEAD/meta data of the response
    res.writeHead(200,'Content-type', 'text/html');
    console.log(req)
    res.write(file);
    res.end();
})


app.get('/contact-me', async function(req,res) {
    const file = await fs.readFile('./contact-me.html', { encoding: 'utf8' })
    // The HEAD/meta data of the response
    res.writeHead(200,'Content-type', 'text/html');
    // We write the response as the file 
    res.write(file);
    res.end();
})


app.get('/about', async function(req,res) {
    const file = await fs.readFile('./about.html', { encoding: 'utf8' })
    // The HEAD/meta data of the response
    res.writeHead(200,'Content-type', 'text/html');
    res.write(file);
    res.end();
})

//Express method for our server to listen to a certain port
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});