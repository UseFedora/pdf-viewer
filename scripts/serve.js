const path = require('path')
const express = require('express')

const port = 5000
const dist = path.join(__dirname, '../dist')

const app = express()
const staticDir = express.static(dist)

app.use('/', staticDir)

app.listen(port, () => {
  console.log(`Now serving folder "./dist" at http://localhost:${5000}`)
})
