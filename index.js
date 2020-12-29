const express = require('express')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
// console.log(process.env.DB_USER); // check .env connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wbtxn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
const port = 5000


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db(process.env.DB_NAME).collection("products");
  console.log('database connected');
});


app.listen(port)