const express = require('express');
const Path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(Path.join(`${__dirname}/../public`)));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
