const request = require('request-promise');
const axios = require('axios');

class ApiManager {
  constructor() {}

  // Recieve type ("id" / "name" / "type" / "height" / "weight") and value (number or string)
  // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filtered pokemons)
  async getPokemons(type, value) {
    let response = {};
    await request.get('http://localhost:3000/pokemon', { form: { type, value } }, function(
      err,
      http,
      body
    ) {
      response.body = body.length == 2 ? 'Error: The pokemon was not found' : JSON.parse(body);
      response.status = http.statusCode;
    });
    return response;
  }

  // Recieve id (number), name (string), type (string), height (number), weight (number)
  // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filtered pokemons)
  async postPokemon(id, name, type, height, weight) {
    let response = {};
    await request.post(
      'http://localhost:3000/pokemon',
      { form: { id, name, type, height, weight } },
      function(err, http, body) {
        response.status = http.statusCode;
        response.body = body;
      }
    );
    return response;
  }

  // Recieve type ("id" / "name" / "type" / "height" / "weight"), value (number or string) - and find ONE pokemon that has those attributes
  // Recieve changedType ("id" / "name" / "type" / "height" / "weight"), changedValue (number or string) - and change that attribute for the poken that was found
  // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filtered pokemons)
  async putPokemon(type, value, changedType, changedValue) {
    let response = {};
    await request.put(
      'http://localhost:3000/pokemon',
      { form: { type, value, changedType, changedValue } },
      function(err, http, body) {
        response.status = http.statusCode;
        response.body = body;
      }
    );
    return response;
  }

  // Recieve type ("id" / "name" / "type" / "height" / "weight") and value (number or string) and delete the pokemon
  // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filtered pokemons)
  async deletePokemon(type, value) {
    let response = {};
    await request.delete('http://localhost:3000/pokemon', { form: { type, value } }, function(
      err,
      http,
      body
    ) {
      response.status = http.statusCode;
      response.body = body;
    });
    return response;
  }
}

module.exports = ApiManager;
