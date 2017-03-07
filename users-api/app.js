// app.js
// Bootstrapping the express application
// Loads all routes

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

<<<<<<< HEAD
// Allow Cross origin request
=======
// Allow Cross origin requests
>>>>>>> a5d4a148386296b93963dbe96a899075d7fef326
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());

// Load in routes:
app.get('/alive', require('./api/alive.js')());

<<<<<<< HEAD
//Only bootstrapped, not run (for testing)
=======

// only bootstrapped, not run (for testing)
>>>>>>> a5d4a148386296b93963dbe96a899075d7fef326
module.exports = app;
