const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000


 

app.get('/', (req, res) => {
  res.send('livescore for the Gambian football league')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/me',(req, res) => {
    req.send('this is me')
})
    
