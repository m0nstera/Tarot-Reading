const express = require('express');
const app = express();
const PORT = 3002;

// index.html
app.use(express.static('../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get();

// app.post();

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});