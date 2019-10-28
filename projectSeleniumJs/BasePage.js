const SeleniumInfra = require("./SeleniumInfra");
const Logger = require("../logger")

class BasePage {
  constructor(name) {
    this.logger = new Logger(name).logger
    this.selenium = new SeleniumInfra(this.logger);
    this.logger.transports[0].level = 'info' //define level to dispau at console
    this.logger.transports[1].level = 'info' //define level to display at file
  }
  //every thing under the level that we define will display
  // error: 0, 
  // warn: 1, 
  // info: 2, 
  // verbose: 3, 
  // debug: 4, 
  // silly: 5 

}

module.exports = BasePage;
