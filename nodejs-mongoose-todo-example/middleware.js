const express = require('express')
const path = require('path')

module.exports = function(app) {
    app.use('/', express.static(path.resolve(__dirname, 'assets')));

    // added body parser.
    app.use(express.json());

    app.get('/status', function (req, res) {
        res.status(200).send("Server is up and running");
    });

    // added api router.
    const apiRouter = require('./routes/apiRouter');
    app.use('/api', apiRouter);

}