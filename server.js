const express = require('express')
const path = require('path');
const app = express()



app.use(express.static('.'));
app.use(express.json())


// Définir la route http://127.0.0.1:3001/ pour Markers.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Markers.html'));
  });





app.listen(3001)