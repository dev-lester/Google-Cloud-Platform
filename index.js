const { readFile } = require('fs').promises;

const express = require('express');
const app = express();




app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8')); 

});

app.get('/writing.html', async (request, response) => {
    
    response.send( await readFile('./writing.html', 'utf8'));

});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App is on ${port}...`));
