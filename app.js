// use strict;

const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res, next) =>{
  res.render('index', {title: 'Media Byte', message: 'Here we go!'})
})

app.listen(port, () => {
  console.log(`Now listening on ${port}`)
});
