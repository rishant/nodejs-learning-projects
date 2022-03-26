const express = require('express')
const path = require('path')
//const cors = require('cors');
const bodyParser = require('body-parser')

module.exports = function(app) {
    // Cross browser support.
    //app.use(cors);

    // View engine added.
/*  
    app.set('views', __dirname + '/views');
    app.set('views engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());
*/
    app.use('/', express.static(path.resolve(__dirname, 'assets')));

    // added body parser.
    //app.use(express.json());
    app.use(bodyParser.json())

    app.get('/status', function (req, res) {
        res.status(200).send("Server is up and running");
    });

    // added api router.
    const apiRouter = require('./routes/apiRouter');
    app.use('/api', apiRouter);

}