


class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium
        this.table = {
            'First Name': 0,
            'Last Name': 1,
            'Country': 2,
            'Email': 3,
            'owner': 4,
            'Sold': 5,
            'Contact Date': 6,
            'Email-Type': 7
        }
    }



    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/client")

    }

    async isPopUpExistAfterClick() {

       await this.selenium.clickElement("className", "clientDetails")
       return await this.selenium.waitUntilElementExist("className", "details-pop-up")
       // return await this.selenium.isElementExists("className", "details-pop-up")

    }

    async isMoveBetweenPages(clickNext, clickPrevious,numOfPageAfterClicking) {

        if (clickNext)
            for (let i = 1; i <= clickNext; i++) {
                await this.selenium.clickElement("xpath", "//img[@name='next']")
            }
        if (clickPrevious)
            for (let j = 1; j <= clickPrevious; j++) {
                await this.selenium.clickElement("xpath", "//img[@name='previous']")
            }
            let pages = await this.getPagesNumber()
            if(numOfPageAfterClicking == pages[0] )
            {
                return true
            }
            else{
                return false
            }
    }

    async getPagesNumber() {
        let pagesNumStartEnd = []
        let pages = await this.selenium.findElementListBy("className", "page")
        let startPage = await this.selenium.getTextFromElement(null, null, pages[0])
        let endPage = await this.selenium.getTextFromElement(null, null, pages[2])

        return pagesNumStartEnd = [startPage, endPage]

    }

    async getTextByAttribute(searchBy) {
        let stringsOfSearchBy =[]
        let personDetail = []
        let pages = await this.getPagesNumber()
        for (let i = pages[0]; i <= pages[1]; i++) {
            let arrayOfPersons = await this.selenium.findElementListBy("className", "clientDetails")
            for (let j in arrayOfPersons) {
                personDetail.push(await this.selenium.findElementListBy("tagName", "th", arrayOfPersons[j]))
                stringsOfSearchBy.push(await this.selenium.getTextFromElement(null,null,personDetail[j][this.table[searchBy]]))
                
            }
            await this.selenium.clickElement("xpath", "//img[@name='next']")
        }

        return stringsOfSearchBy


    }


    //this function get the current table that open but with out getting the text inside this is because if i want check name exist in specific attribute so i dont need to get all the text from line (its increase the speed of searching)
    async getCurrentTableWithOutText() {
        let arrayOfTh = []
        let personDetail = []
        let pages = await this.getPagesNumber()

        for (let i = pages[0]; i <= pages[1]; i++) {
            let arrayOfPersons = await this.selenium.findElementListBy("className", "clientDetails")
            for (let j in arrayOfPersons) {
                personDetail.push(await this.selenium.findElementListBy("tagName", "th", arrayOfPersons[j]))
                
            }
            await this.selenium.clickElement("xpath", "//img[@name='next']")
        }

        return personDetail

    }


    async isDetailTheSamePopUp(user, searchBy)//check if the vlaue are the same as show at the table
    {
        let attr = ["First Name", "Last Name", "Country", "Email"]//this is the attribute that i check
        let id = ["name", "country", "email"]
        let gettingTextFromPopUp = []
        await this.openCorrectTable(user, searchBy)
        await this.selenium.clickElement("className", "clientDetails")
        for (let i in id) {
            let element = await this.selenium.findElementBy("id", id[i])
            gettingTextFromPopUp.push(await element.getAttribute("value"))
        }
        let name = gettingTextFromPopUp[0].split(" ")
        gettingTextFromPopUp.splice(0, 1)
        gettingTextFromPopUp.unshift(name[0], name[1])
        let currentTable = await this.getCurrentTableWithOutText()


        for (let j in currentTable) {
            for (let i in gettingTextFromPopUp) {
                if (gettingTextFromPopUp[i] != await this.getTextFromSpecificAttr(currentTable[j], attr[i])) {
                    console.log("found bug at ->" + attr[i])
                    return false
                }

            }
        }
        return true
    }

    //searching client and delete him
    async deleteClient(deleteUser, searchBy) {
        await this.openCorrectTable(deleteUser, searchBy)
        let arr = await this.getCurrentTableWithOutText()
        if (arr.length == 1) {
            await this.selenium.clickElement("className", "clientDetails")
            await this.selenium.clickElement("xpath", "//input[@value='Delete Client']")
        }
        else {
            console.log("there is more then 1 person with that details please search by uniqe value and then delete")
        }
        arr = await this.getCurrentTableWithOutText()
        if (!arr) {//checking if there is a table if there is a table so its bad! the delete dont work if there is no table to show then wohoo the delete work
            return false
        }
        return true
    }


    //function that update user at client page so first we find some user to update :)
    async updateClientAtClientPage(updateUser, searchBy, updateName, updateCountry, updateEmail) {
        let update = [updateName, updateCountry, updateEmail]
        let attr = ["First Name", "Last Name", "Country", "Email"]//attribute that we want to check at the table after the update
        let id = ["name", "country", "email"]//the id of the input field at the popUp
        //spilting the name beacuse the name reference to first name and last name
        await this.openCorrectTable(updateUser, searchBy)
        await this.selenium.clickElement("className", "clientDetails")
        for (let index in id) { //clearing fields and then isert a new input
            if (update[index]) {
                await this.selenium.clearElementField("id", id[index])
                await this.selenium.write(update[index], "id", id[index])

            }
        }
        if (updateName) {
            let name = updateName.split(" ")
            update.unshift(name[0], name[1])
            update.splice(2, 1)
        }
        await this.selenium.clickElement("xpath", "//input[@value='Update Client']")
        await this.selenium.waitUntilElementNotExist("className", "details-pop-up") //waiting until the popup remove its fucntion that i creat at the seleniumInfra
        await this.clearEelementField()
        await this.openCorrectTable(updateName, searchBy)
        let currentTableAfterUpdate = await this.getCurrentTableWithOutText() //getting the current table after update
        //if the update that we do is not the same as the new details at the table then it return false and dont continue loop 
        //if everything fine then it do the loop with out returning false and its mean that everthing fine and we can return true!
        for (let j in currentTableAfterUpdate) {
            for (let i in update) {
                if (update[i]) { //checking if there is update that we do if  there is  a update then we check the update According to the table
                    if (update[i] != await this.getTextFromSpecificAttr(currentTableAfterUpdate[j], attr[i])) {
                        return false
                    }
                }
            }
        }
        return true

    }



    //this function check if the all the attribure are exist
    async isAttributeExist(arrOfAllAttribute) {
        let rows = await this._getRowsFromTable()
        for (let i in arrOfAllAttribute)
            if (arrOfAllAttribute[i] != rows[rows.indexOf(arrOfAllAttribute[i])])
                return false
        return true
    }
    //getting the rows from table 
    async _getRowsFromTable() {
        let personAttr = []
        let rows = await this.selenium.findElementListBy("className", "table-header-th")
        for (let getText of rows) {
            personAttr.push(await this.selenium.getTextFromElement(null, null, getText))
        }
        return personAttr
    }

    //getting all the values of persons from current page
    async getCurrentTable() {
        let personDetail = {}
        let arrayOfPersons = []
        let personAttr = []
        let colums = await this.selenium.findElementListBy("className", "clientDetails")
        personAttr = await this._getRowsFromTable()//getting the attribute that showen at the table
        for (let i in colums) {
            let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
            for (let j in personAttr) {
                personDetail["'" + personAttr[j] + "'"] = await this.selenium.getTextFromElement(null, null, detailsOfPerson[j])

            }
            arrayOfPersons.push(personDetail)
            personDetail = {}
        }
        console.table(arrayOfPersons)
        let dropDownMenu = await this.selenium.findElementBy("className", "select-css")
        await this.selenium.write("Name", null, null, dropDownMenu, null, true) //after getting all the persons from table we initliaze the dropdown
        return arrayOfPersons
    }

    async getTextFromSpecificAttr(arrayOfPersons, searchBy) {
        return await this.selenium.getTextFromElement(null, null, arrayOfPersons[this.table[searchBy]])
    }


    //function that open the table after insert input and search by "country","sold"....
    async openCorrectTable(input, searchBy) {
        await this.selenium.write(input, "xpath", "//input[@type='text']")
        let dropDownMenu = await this.selenium.findElementBy("className", "select-css")
        await this.selenium.clickElement(null, null, dropDownMenu)
        await this.selenium.write(searchBy, null, null, dropDownMenu, null, true)
        await this.selenium.clickElement(null, null, dropDownMenu)

    }

    //clear element fields
    async clearEelementField() {
        await this.selenium.clearElementField("xpath", "//input[@type='text']")
        let dropDownMenu = await this.selenium.findElementBy("className", "select-css")
        await this.selenium.write("Name", null, null, dropDownMenu)
    }

    //this function handleing the problem with search By NAME because at the table we have first name and last name attributes and we check if the input that we send is exist under this attribute
    async _isSearchByIncludeName(input, searchBy, arrayOfPersons) {

        let concenateSearchBy = ["First " + searchBy, "Last " + searchBy]
        let concatenateFnameLname

        for (let i in arrayOfPersons) {
            concatenateFnameLname = await this.getTextFromSpecificAttr(arrayOfPersons[i], concenateSearchBy[0]) +
                " " + await this.getTextFromSpecificAttr(arrayOfPersons[i], concenateSearchBy[1])//concenate first name and last name from table of each line and check if the input does not exist at the table . if its return false its mean we have a line that apper after search and the input we search for is not there its a bug!
            concatenateFnameLname = concatenateFnameLname.toLowerCase();
            if (!concatenateFnameLname.includes(input)) {
                console.log("A line did appear after search, but we didn't find what we were looking for at this line\n line:" + i + " its a bug!!")
                return false
            }
        }


        return true


    }


    //this function is searching string at the table by some attribute and check if the string is exist at the table
    async searchAndValidateClient(input, searchBy) {
        input = input.toLowerCase()
        let arrayOfPersons = []
        await this.openCorrectTable(input, searchBy)
        arrayOfPersons = await this.getCurrentTableWithOutText()
        if (arrayOfPersons.length) {
            if (searchBy == "Name") {
                return this._isSearchByIncludeName(input, searchBy, arrayOfPersons)
            }
            for (let i in arrayOfPersons) {
                let string = await this.getTextFromSpecificAttr(arrayOfPersons[i], searchBy)
                string = string.toLowerCase()
                if (!string.includes(input)) {
                    console.log("A line did appear after search, but we didn't find what we were looking for at this line\n line:" + i + " its a bug!!")
                    return false
                }

            }
        }
        else {
            return false
        }
        return true
    }


}
module.exports = ClientsPage






