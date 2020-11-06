const express = require('express');
const app = express();
const PORT = 3002;
var tarot = require('tarot-deck');
console.log( tarot.suits );

// index.html
app.use(express.static('../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});