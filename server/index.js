require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;
const apiPath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const header = {
  headers: {
    Authorization: process.env.TOKEN
  }
};

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// ---- PRODUCT OVERVIEW ROUTES ---- //

// returns array of 5 products
app.get('/products', (req, res) => {
  axios.get(`${apiPath}/products`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err)=> {
      res.send(err);
    })
});

// return all product level information for a specified id
app.get('/products/product_id', (req, res) => {
  axios.get(`${apiPath}/products/${req.body.id}`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

// return all styles available for a given product
app.get('/products/product_id/styles', (req, res) => {
  axios.get(`${apiPath}/products/${req.body.id}/styles`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

// return the ID's of products related to specified product_id
app.get('/products/product_id/related', (req, res) => {
  axios.get(`${apiPath}/products/${req.body.id}/related`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});


// ---- RATINGS & REVIEWS ROUTES ---- //



// ---- QUESTIONS & ANSWERS ROUTES ---- //
//Retrieves a list of questions for a particular product.
app.get('/qa/questions', (req, res) => {
  res.end()
});

//Returns answers for a given question.
app.get(`/qa/questions/:question_id/answers`, (req, res) => {
  res.end()
});

//Adds a question for the given product.
app.post('/qa/questions', (req, res) => {
  res.end()
});

//Adds an answer for the given question.
app.post(`/qa/questions/:question_id/answers`, (req, res) => {
  res.end()
});

//Updates a question to show it was found helpful.
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  res.end()
});

//Updates a question to show it was reported.
app.put('/qa/questions/:question_id/report', (req, res) => {
  res.end()
});

//Updates an answer to show it was found helpful.
app.put('/qa/questions/:answer_id/helpful', (req, res) => {
  res.end()
});

//Updates an answer to show it has been reported.
app.put('/qa/answers/:answer_id/report', (req, res) => {
  res.end()
});



// ---- RELATED ITEM AND OUTFIT CREATION ROUTES ---- //


if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

module.exports = app;