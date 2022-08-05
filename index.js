const http = require('http');
const fs = require('fs/promises')

//We just created a server that listens for http requests on a certain port. 
// Then depending on the url we write a certain file to it
const port = 8080

// In the server we filter the resoponse we send based on the url in the req obj
const server = http.createServer(async (req, res) => {
  const {url} = req 
  if (url == '/') {
    const file = await fs.readFile('./index.html', { encoding: 'utf8' })
    // The HEAD/meta data of the response
    res.writeHead(200,'Content-type', 'text/html');
    console.log(req)
    res.write(file);
    res.end();
  } else if (url == '/about') {

    const file = await fs.readFile('./404.html', { encoding: 'utf8' })
    // The HEAD/meta data of the response
    res.writeHead(200,'Content-type', 'text/html');
    res.write(file);
    res.end();
  } else if (url == '/contact-me') {
    
    const file = await fs.readFile('./404.html', { encoding: 'utf8' })
    // The HEAD/meta data of the response
    res.writeHead(200,'Content-type', 'text/html');
    // We write the response as the file 
    res.write(file);
    res.end();
  } else {

    const file = await fs.readFile('./404.html', { encoding: 'utf8' }) 
    // The HEAD/meta data of the response
    res.writeHead(404,'Content-type', 'text/html');
    // We write the response as the file 
    res.write(file);
    return res.end();
  }
})


server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})