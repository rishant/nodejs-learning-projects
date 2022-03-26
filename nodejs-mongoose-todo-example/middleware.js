const express = require('express')
const path = require('path')

module.exports = function(app) {
    app.use('/', express.static(path.resolve(__dirname, 'assets')));

    // added body parser.
    app.use(express.json());

    app.get('/status', function (req, res) {
        res.status(200).send("Server is up and running");
    });

    // Global Error Handler
    app.use((error, req, res, next) => {
        console.log(error.stack);
        console.log(error.name);
        console.log(error.code);

        res.status(500).json({
            message: "Something went rely wrong"
        });
    });


    // added api router.
    const apiRouter = require('./routes/apiRouter');
    app.use('/api', apiRouter);

}