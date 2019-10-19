const ClientPage = require("./ClientsPage")

class analyticPage {
    constructor(selenium) {
        this.selenium = selenium
        this.clientPage = new ClientPage(this.selenium)
    }

    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics")
    }
    async getMostFrequentElement(array) {


        let countWord ={}
        let counter = 0
        for (let i in array) {
            for (let i in array) {
                if (!(array[i] in countWord))
                    if (array[i] == array[i+1]) {
                        countWord.push(array[i])
                        counter++
                    }
                    countWord["'"+array[i]+"'"] = counter        
            }
            

        }

    }

    async getHottestCountry() {
        let mostSeenInPage = []
        let countryArr = []
        await this.clientPage.navigateToClientsPage()
        let values = await this.clientPage.getValuesPageByAttr("Country")

        for (let i in values) {
            mostSeenInPage.push(await this.getMostFrequentElement(values[i]))
        }
    }

}
module.exports = analyticPage