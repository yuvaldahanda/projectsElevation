const BasePage = require("./BasePage");
const ActionPage = require("./ActionsPage")
const ClientPage = require("./ClientsPage")


class ActionTest{

    constructor()
    {
        this.testSelenium = new BasePage().selenium
        this.actionPage = new ActionPage(this.testSelenium) 
        this.clientPage =new ClientPage(this.testSelenium)
        
    }

    
    async actionTest(){
        await this.actionPage.navigateToActionPage();
        
    }
    async addClient(firstName,lastName,country,owner,email)
    {
        if(await this.actionPage.addClient(firstName,lastName,country,owner,email))
        {
            await this.clientPage.navigateToClientsPage()
            if(await this.clientPage.searchAndValidateClient(email,"Email"))
            {
                console.log("user update successufuly!!!")
            }
            else{
                console.log("The user does add at the action page, but it does not appear in the table")
            }
        }
        else{
            console("there is missing details")
        }
    
    }
    async update(updateName, updateOwner, emailType)
    {
        let updateDetails={"Name":updateName, "Owner":updateOwner, "Email-Type":emailType}
        let keysOfUpdate = Object.keys(updateDetails)
       if(await this.actionPage.update(updateName, updateOwner, emailType))
       {

        
            for(let i in keysOfUpdate)
            {
                if(updateDetails[keysOfUpdate[i]])
                {
                    await this.clientPage.navigateToClientsPage()
                    if(await this.clientPage.searchAndValidateClient(updateDetails[keysOfUpdate[i]],keysOfUpdate[i]))
                    {
                        console.log("user updates successfully!!!")
                    }
                    else{
                        console.log("user update at action page but not at the table")
                    }

                }
            }
       }
       else{
            console.log("missing some details at action page")
       }
    }
}

let actionTest= new ActionTest()
actionTest.actionTest()
actionTest.addClient("pppppp","ppasdasp","rorasdasdo","pppadsapp","asdasdad")
actionTest.update("Mendoza Lott","Mendoza Lott","B")