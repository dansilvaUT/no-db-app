const express = require('express');
port = 4444;
app = express();

//Parse incoming requests to JS
app.use(express.json());


//Listen for changes
app.listen(port, () => console.log(`Listening for changes on ${port}`));