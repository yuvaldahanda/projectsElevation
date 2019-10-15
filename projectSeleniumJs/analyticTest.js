const BasePage = require("./BasePage");
const AnalitycPage = require("./analyticPage")


class AnalyticTest
{
    constructor()
    {
        this.testSelenium = new BasePage().selenium
        this.analyticsPage = new AnalitycPage(this.testSelenium) 
    }  

    async analyticTest()
    {
        await this.analyticsPage.navigateToClientsPage()
    }

    async hottestCountry()
    {
        await this.analyticsPage.getHottestCountry()
    }
    async emailSent()
    {

    }
    async outStandingClient()
    {

    }


}


let test = new AnalyticTest()
test.analyticTest()
test.hottestCountry()