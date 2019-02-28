'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { hyperbola } = require('./lib/calc')

const PORT = 3444
const jsonParser = bodyParser.json()

app
  .post('/hyperbola', jsonParser, (req, res) => {
    const result = hyperbola(req.body)
    res
      .json(result)
      .status(200)
      .end()
  })
  .get('/hyperbola/:a/:b/:minX/:maxX', (req, res) => {
    const { a, b, minX, maxX } = req.params
    const result = hyperbola(a, b, minX, maxX)
    res
      .json(result)
      .status(200)
      .end()
  })
  .listen(PORT, () => {
    console.log('Server listening on http://localhost:%d', PORT)
  })
