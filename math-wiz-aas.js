'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { hyperbola } = require('./lib/calc')

const PORT = 3444
const jsonParser = bodyParser.json()

console.error(process.pid)

app
  .post('/hyperbola', jsonParser, (req, res) => {
    const { a, b, minX, maxX } = req.body
    const result = hyperbola({ a, b, minX, maxX })
    res
      .json(result)
      .status(200)
      .end()
  })
  .get('/hyperbola/:a/:b/:minX/:maxX', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const minX = parseInt(req.params.minX)
    const maxX = parseInt(req.params.maxX)
    const result = hyperbola(a, b, minX, maxX)
    res
      .json(result)
      .status(200)
      .end()
  })
  .listen(PORT, () => {
    console.log('Server listening on http://localhost:%d', PORT)
  })
