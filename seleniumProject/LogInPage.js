const SeleniumInfra = require('./seleniumInfra');

const seleniumInfra = new SeleniumInfra()

class LoginPage{
    constructor(){
        //Get the selenium driver from SeleniumInfra class
    }

    async login(){
        await seleniumInfra.clickElement();
    }
}

module.exports.loginPage=this.loginPage
