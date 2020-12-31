const express = require('express');
charCtlr = require('./controllers/characterCtlr');
port = 4444;
app = express();

//Parse incoming requests to JS
app.use(express.json());

// ENDPOINTS
//character controller
app.get('/api/get-character', charCtlr.getCharacter);

//My character controllers

//Listen for changes
app.listen(port, () => console.log(`Listening for changes on ${port}`));