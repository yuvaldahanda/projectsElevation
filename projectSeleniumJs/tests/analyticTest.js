const BasePage = require("../BasePage");
const AnalitycPage = require("../analyticPage")
const ClientPage = require('../ClientsPage')
const ActionPage = require('../ActionsPage')



class AnalyticTest {
    constructor(name) {
        this.testSelenium = new BasePage(name).selenium
        this.logger = this.testSelenium.logger
        this.analyticsPage = new AnalitycPage(this.testSelenium,this.logger)
        this.clientPage = new ClientPage(this.testSelenium,this.logger)
        this.actionPage = new ActionPage(this.testSelenium,this.logger) 
    }

    async analyticTest() {
        await this.analyticsPage.navigateToAnalyticsPage()
    }

    //algorothim to find the most frequent word in array
    async mostFrequentWord(arrayOfWords) {
        let max = 1;
        let counter = 0;
        let item;
        for (let i = 0; i < arrayOfWords.length; i++) {
            for (let j = i; j < arrayOfWords.length; j++) {
                if (arrayOfWords[i] == arrayOfWords[j])
                    counter++;
                if (max < counter) {
                    max = counter;
                    item = arrayOfWords[i];
                }
            }
            counter = 0;
        }
        this.logger.info(item + "(" + max + "times)");
        return [item, max]

    }
    //getting the hottest country
    async hottestCountry() {
        let hottestCountryAnlyticPage = await this.analyticsPage.getHottestCountry()
        await this.clientPage.navigateToClientsPage()
        let arrayOfWords = await this.clientPage.getTextByAttribute("Country")
        let result = await this.mostFrequentWord(arrayOfWords)

        if (hottestCountryAnlyticPage == result[0])
            this.logger.info("Analytic Test:-> PASS -> the hottest country is " + result[0])
        else {
            this.logger.info("Analytic Test:-> Fail -> the hottest country is not the same as the result!!")
        }
    await this.analyticsPage.navigateToAnalyticsPage()

    }

    //functuin that get most frequent word by search something
    //for example input=YES searchBy=sold attribute=Country , i find the most frequent country that the sold attribute is yes
    async getFrequentWordBySearchBy(input,searhBy,attribute) {

        await this.clientPage.navigateToClientsPage()
        await this.clientPage.openCorrectTable(input,searhBy)
        let arrayOfWords = await this.clientPage.getTextByAttribute(attribute)
        let result = await this.mostFrequentWord(arrayOfWords)
        this.logger.info("Analytic Test:-> PASS -> the hottest country is " + result)
        await this.analyticsPage.navigateToAnalyticsPage()
    }

    //function that update emailtype of person and then check if its update at analyticpage 
    async emailSent(name, emailType) {
        let currentEmailSentNUm = await this.analyticsPage.getEmailSent()
        await this.actionPage.navigateToActionPage()
        await this.actionPage.update(name, null, emailType)
        await this.analyticsPage.navigateToAnalyticsPage()
        let emailSentNumAfterUpdate = await this.analyticsPage.getEmailSent()
        if (currentEmailSentNUm + 1 == emailSentNumAfterUpdate) {
            this.logger.info("Analytic Test:-> Pass -> Success  Added one to the email sent number")
        }
        else {
            this.logger.info("Analytic Test:-> Fail -> one is not added to Email sent")
        }

    }
    //function that check if outstanding client at analytic page is update
    async outStandingClient(name, isSold) {
        let numOfOutStandingClient = await this.analyticsPage.getOutStandingClient()
        await this.actionPage.navigateToActionPage()
        await this.actionPage.update(name, null, null, isSold)
        await this.analyticsPage.navigateToAnalyticsPage()
        let numAfterUpdate = await this.analyticsPage.getOutStandingClient()
        if (numAfterUpdate == numOfOutStandingClient + 1) {
            this.logger.info("Analytic Test:-> PASS -> success added one to outstanig client")
        }
        else {
            this.logger.info("Analytic Test:-> Fail -> not added 1 to outstanding client")
        }
        

    }


}



let test = new AnalyticTest("analytic Test")

async function functionalTest() {

    await test.analyticTest()
    // await test.getFrequentWordBySearchBy("yes","Sold","Country")
       await test.hottestCountry()
    // await test.emailSent("Shauna Lindsay", "B")
    // await test.outStandingClient("Maynard Mcintosh", true) //true mean decleard as sold
}

async function negativeTest() {
    await test.analyticTest()
    await test.emailSent("Shauna Lindsay", " ")
    await test.outStandingClient("Maynard Mcintosh", false)


}
async function stability() {
    await test.analyticTest()
    for (let i = 0; i < 10; i++)
        await test.emailSent("Shauna Lindsay", "B")
    for (let i = 0; i < 10; i++)
        await test.outStandingClient("Maynard Mcintosh", true)
}

functionalTest()
// negativeTest()
// stability()