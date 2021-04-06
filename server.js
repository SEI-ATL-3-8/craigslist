const express = require('express')
const app = express()

app.get('/puppies', (req, res) => {
    res.send('You have reached the GET /puppies route!')
  })

  app.listen(3000, () => {
    console.log('the server is listening!')
  })