const ClientPage = require("./ClientsPage")

class analyticPage
{
    constructor(selenium)
    {
        this.selenium = selenium
        this.clientPage = new ClientPage(this.selenium)
    }

    async navigateToClientsPage()
    {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics")
    }

    async getHottestCountry()
    {
        let countryArr =[]
       await  this.clientPage.navigateToClientsPage()
        let arrayOfpersonFromEachPage = await this.clientPage.getPersonsFromEachPage()
        for(let i in arrayOfpersonFromEachPage)
        {
            for(let j in arrayOfpersonFromEachPage[i])
            {
                countryArr.push(arrayOfpersonFromEachPage[i][j]['Country'])
            }
            

        }

    }

}
module.exports = analyticPage