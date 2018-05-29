"use strict";
const soap = require("strong-soap").soap;
const config = require('./config.json')
const express = require('express')
const app = express();
const port = config.port;
const url = config.wsdlURL;
const options = {};

const bodyParser = require('body-parser')
let soapClient;

soap.createClient(url, options, function(err, client) {
  soapClient = client;
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Sample Body
{

}
*/

app.post('/', (req, res) => {
  const method = soapClient[req.body.function];
  method(req.body.args, function(err, result, envelope, soapHeader) {
    res.json(result)
  });
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})