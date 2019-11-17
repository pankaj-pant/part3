const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

const Person = require('./models/person')

const morgan = require('morgan')
const cors = require('cors')

app.use(express.static('build'))
app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use(cors())

let persons = [
  {
    name: 'Arto Hellas',
    number: '123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '459328329',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '88983277',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '38923892',
    id: 4
  }
]

app.get('/api/info', (request, response) => {
  Person.find({}).then(people => {
    response.send(
      `<p>Phonebook has info for ${people.length} people</p>`+
        new Date()
    )
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person.toJSON())
    } else {
      response.status(404).end()
    }
  })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})