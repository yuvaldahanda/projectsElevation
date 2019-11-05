const express = require('express')
const router = express.Router()
let pokemon = require('./pokemon')
let pokemonDB = []
pokemon.forEach(p => pokemonDB.push({id: p.id, name: p.name, type: p.type, height: p.height, weight: p.weight}))

// GET
router.get('/pokemon', function (req, res) {
  let value = req.body.value;
  let type = req.body.type;
  if (type === "id" || type === "height" || type === "weight") {
    value = Number(value)
  }
  let result = pokemonDB.filter(p => p[type] === value)
  res.send(result)
})

// PUT
router.put('/pokemon', function (req, res) {
  let value = req.body.value;
  let type = req.body.type;
  let changedType = req.body.changedType;
  let changedValue = req.body.changedValue;
  let entirety = type && value && changedType && changedValue
  if (type === "id" || type === "height" || type === "weight") {
    value = Number(value)
  }
  if (changedType === "id" || changedType === "height" || changedType === "weight") {
    changedValue = Number(changedValue)
  }
  let result = pokemonDB.find(p => p[type] === value)
  if (result && entirety) {
    result[changedType] = changedValue
    res.send(`A pokemon with ${type} of ${value} was changed. His ${changedType} was changed to ${changedValue}`)
  } else {
    if (!entirety) {
      res.send('Some details are missing')
    } else {
      res.send(`A pokemon with ${type} of ${value} was not found`)
    }
  }
})

// POST
router.post('/pokemon', function (req, res) {
  let id = Number(req.body.id);
  let name = String(req.body.name);
  let type = String(req.body.type);
  height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let idCheck = pokemonDB.find(p => p.id === id)
  let entirety = id && name && type && height && weight
  if (idCheck) {
    res.send(`A pokemon with id of ${id} is already exist`)
  } else {
    if (entirety) {
      pokemonDB.push({ id, name, type, height, weight })
      res.send(`A new pokemon with id of ${id} was added--->  Name: ${name} ; Type: ${type} ; Height: ${height} ; Weight: ${weight}`)
    } else {
        res.send(`One or more of the details are missing or invalid`)
    }
  }
})

// DELETE
router.delete('/pokemon', function (req, res) {
  let value = req.body.value;
  let type = req.body.type;
  if (type === "id" || type === "height" || type === "weight") {
    value = Number(value)
  }
  let index = pokemonDB.findIndex(p => p[type] === value)
  if (index!==-1 && value && type) {
    pokemonDB.splice(index, 1)
    res.send(`A pokemon with ${type} of ${value} was deleted`)
  } else {
    res.send(`A pokemon with ${type} of ${value} was not found`)
  }
})

module.exports = router