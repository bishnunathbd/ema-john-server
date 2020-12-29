const express = require('express')
require('dotenv').config()
// console.log(process.env.DB_USER); // check .env connection

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)