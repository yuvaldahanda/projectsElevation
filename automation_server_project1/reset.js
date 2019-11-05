const ManagerApi = require("./apiManager")
const Logger = require("../../code/bootcamp/logger/logger1")
const _ = require('lodash');


class TestPokemon {
    constructor(testName) {
        this.logger = new Logger(testName).logger
        this.managerApi = new ManagerApi()
        this.checkObject = {
            body: "body",
            status: 200
        }
        

    }



    async getPokemons(type, value) {
        let pokemon = await this.managerApi.getPokemons(type, value)

        if (pokemon["status"] == this.checkObject.status) {
            if (pokemon["body"].length > 1 && type == "id") {
                this.logger.error("Test Fail -> pokemon with type " + type + " and value " + value + "have more then 1 id")
            }
            for (let i in pokemon[this.checkObject.body]) {
                if (pokemon[this.checkObject.body][i][type] != value) {
                    this.logger.error("Test Fail -> pokemon with type " + type + " and value " + value + "is not exist")
                }
            }
            this.logger.info("Test Pass -> pokemon with type " + type + " and value " + value + " is exist")
        }
        else {
            this.logger.error("Test Fail -> status " + pokemon["status"])

        }
    }
    // Recieve id (number), name (string), type (string), height (number), weight (number)
    // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filtered pokemons)
    async postPokemon(id, name, type, height, weight) {
        let arrayOfValues = [id, name, type, height, weight]
        let arrayOfAttr = ["id", "name", "type", "height", "weight"]
        await this.managerApi.postPokemon(id, name, type, height, weight)
        let pokemon = await this.managerApi.getPokemons("id", id)
        if (pokemon["status"] == this.checkObject.status) {
            for (let i in pokemon[this.checkObject.body]) {
                if (pokemon[this.checkObject.body][i][arrayOfAttr[i]] != arrayOfValues[i]) {
                    this.logger.info("Test Fail -> pokemon with id :"+id+" name: "+ name +" type :"+ type+"height :"+height+ "weight: "+ weight+" has added")
                }
            }
            this.logger.info("Test PASS -> pokemon with id :"+id+" name: "+ name +" type :"+ type+"height :"+height+ "weight: "+ weight+" has added")
        } else {
            this.logger.error("Test Fail -> status " + pokemon["status"])

        }
    }





    // Recieve type ("id" / "name" / "type" / "height" / "weight"), value (number or string) - and find ONE pokemon that has those attributes
    // Recieve changedType ("id" / "name" / "type" / "height" / "weight"), changedValue (number or string) - and change that attribute for the poken that was found
    // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filpokemons)
    async putPokemon(type, value, changedType, changedValue) {
        await this.managerApi.putPokemon(type,value,changedType, changedValue)
        let objectAfterUpdate = await this.managerApi.getPokemons(type, value)
        if(objectAfterUpdate['body'][0][changedType] == changedValue)
        {
            this.logger.info("Test PASS -> the type has changed to"+changedType+" and value has changed to "+changedValue)
        }
        else{
            this.logger.error("Test Fail -> the type has not changed to"+changedType+" and value has changed to "+changedValue)

        }
        
    }
    async deletePokemon(type, value) {
        await this.managerApi.deletePokemon(type, value)
        let ob = await this.managerApi.getPokemons(type, value)
        if(!(ob['body'] instanceof(Array)))
        {
            this.logger.info("Test Pass -> the pokemon with " + type + " and value " + value + " deleted")
        }
        else{
             this.logger.error("Test Fail -> the pokemon with type" + type + "and value" + value + " not deleted")

        }
    }

}


const testPokemon = new TestPokemon("resetApi")
// testPokemon.getPokemons("id",158)
// testPokemon.getPokemons("id", 1)
testPokemon.deletePokemon("id",4)
//testPokemon.postPokemon(158, "dragonair", "dragon", 123123, 1444444)
// testPokemon.putPokemon("name", "weedle", -123123, 1444444)

// testPokemon.deletePokemon("id1",0)
// testPokemon.getPokemons("id",)
// testPokemon.putPokemon("type","dragon","dragonBall","z")




