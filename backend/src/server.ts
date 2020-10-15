import express, { response } from 'express'

const app = express()
app.use(express.json())

app.post('/users/:id', (request, response) => {   

    return response.json({message: 'hello'} )

})


app.listen(3333)