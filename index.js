

const express = require('express');
// const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const app = express();


const templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');
app.set('views', './');


app.get('http://sadwave.com/', (req, res) => {
  req
});

app.get('/', (req, res) => {

  res.render('index', {
    title: 'everything has been loaded',
  });
});

// app.use(bodyParser());

app.listen(8080);