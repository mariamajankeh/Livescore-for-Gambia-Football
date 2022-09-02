const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')

 

app.get('/', (req, res) => {
  res.send('livescore for the Gambian football league')
})


app.get('/me',(req, res) => {
    req.send('this is me')
})
    
    
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/api/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find((user) => user.id ===Number (id))
  res.json(user)
  })

  app.get('/api/users', (req, res) => {
    res.json(users)
  })

  app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id
    users = users.filter((u) => u.id !== Number(id))

    res.status(204).end()
  })
  

  console.log(`Example app listening on port ${port}`)

app.post('api/users/:id', (req, res) => {
   const content = req.body

   res.json(content)

})

app.put('/api/users/:id', (req, res) =>{
  const id = req.params.id

})

app.use(middleware.unknownEndpoint)






  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








    




    

