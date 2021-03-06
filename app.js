'use strict';

const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'pug');

app.use(express.static('./'))

app.get('/', (req, res, next) =>{
  res.render('index', {title: 'Media Byte', message: 'Here we go!'})
})

app.get('/urlparse', (req, res, next) => {
  res.render('urlparse')
})

app.listen(port, () => {
  console.log(`Now listening on ${port}`)
});
