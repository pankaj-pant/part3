const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

const Person = require('./models/person')

const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use(cors())

app.use(express.static('build'))

let persons = [
    {
      name: "Arto Hellas",
      number: "123456",
      id: 1
    },
    {
      name: "Ada Lovelace",
      number: "459328329",
      id: 2
    },
    {
      name: "Dan Abramov",
      number: "88983277",
      id: 3
    },
    {
      name: "Mary Poppendieck",
      number: "38923892",
      id: 4
    }
  ]

  const generateId = () => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id)) 
    : 0

    return maxId + 1;
  }

  app.get('/info', (req, res) => {
    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>`+
        new Date()
        )
  })
  

  app.get('/api/persons', (request, response) => {  
    Person.find({}).then(people => {
      response.json(people)
    })
  })

  app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person.toJSON())
    })
  })

  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
  
    res.status(204).end()
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (body.name === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
  
    const person = new Person({
      name: body.name,
      number: body.number
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson.toJSON())
    })
  })
  
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })