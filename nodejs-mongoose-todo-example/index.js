const express = require('express')
const app = express()
const path = require('path');
const config = require(path.resolve(__dirname, 'config.json'));

const port = config.applicationPort;

// Define Function
function bootApp(){

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });      
}

// Call Function
bootApp();

require('./middleware')(app)