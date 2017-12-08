const path = require('path')
const express = require('express')
const dist = path.join(__dirname, '../dist')

const app = express()
const staticDir = express.static(dist)

console.log(staticDir)

app.use('/', staticDir)

app.listen(5000, () => {
  console.log(`Now serving folder "./dist" at http://localhost:${5000}`)
})
