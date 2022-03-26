const express = require('express')
const app = express()
const port = 13371;

// Define Function
function bootApp(){

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });      
}

// Call Function
bootApp();

require('./middleware')(app)