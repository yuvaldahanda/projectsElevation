const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")

class ClientsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        // this.anaPage = new analyticspage(this.testSelenium) // to move between pages
        // if your test uses more pages, you will have to inisiate them here, in the constractor
    }
   
    async clientTest(){
        await this.clientsPage.navigateToClientsPage();
        
    }
    async searchBy(input,searchBy){
       if (await this.clientsPage.searchAndValidateClient(input,searchBy))
            console.log("wow amazing everthing fine there is no bugs today :)")
        else(
            console.log("Worng i found at the table problem")
        )
    }
}   
    
let clientPageTest = new ClientsPageTest();

clientPageTest.clientTest();
clientPageTest.searchBy("Malta","Country")
