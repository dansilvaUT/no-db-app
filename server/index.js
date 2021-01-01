const express = require('express'),
    myCharCtlr = require('./controllers/myCharCtlr'),
    charCtlr = require('./controllers/characterCtlr'),
    port = 4444,
    app = express();

//Parse incoming requests to JS
app.use(express.json());

// ENDPOINTS
//character controller
app.get('/api/get-character', charCtlr.getCharacter);

//My character controllers
app.post('/api/favorite-character', myCharCtlr.addCharacter);
app.get('/api/favorite-character', myCharCtlr.getCharacters);
app.put('/api/favorite-character/:id', myCharCtlr.editCharacter);
app.delete('/api/favorite-character/:id', myCharCtlr.deleteCharacter);

//Listen for changes
app.listen(port, () => console.log(`Listening for changes on ${port}`));