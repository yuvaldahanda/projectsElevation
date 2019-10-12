class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium
        this.personDetail = {}
        this.arrayOfPersons = []
    }
    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/client")
    }
    /*This method gets an input to search and the field to search by
    searchBy can be: Name, Country, Email, Owner, Sold, EmailType
    Return value: true if client exist, false otherwise
    */



    async deleteClient() {


    }

    async updateClient() {

    }
    async moveBetweenTablePages() {

    }

    async isValueInHisPlace(value) {

    }


    async isValueExistNumberOfTimes(input, searchBy, number) {
        let counter = 0
        await this.openCorrectTable(input, searchBy)
        let arrayOfPersons = await this._getCurrentTable()
        for (let i in arrayOfPersons) {
            if (arrayOfPersons[i]["'" + searchBy + "'"] == input) {
                counter++
            }
        }
        if (counter != number)
            return false
        return true
    }

    async isPersonAttributeExist(arrOfAllAttribute) {
        let rows = await this.selenium.findElementListBy("className", "table-header-th")
        for (let index in rows) {
            if (arrOfAllAttribute[index] != await this.selenium.getTextFromElement(null, null, rows[index])) {
                return false
            }
        }
        return true
    }

    async _getRowsFromTable() {
        let personAttr = []
        let rows = await this.selenium.findElementListBy("className", "table-header-th")
        for (let getText of rows) {
            personAttr.push(await this.selenium.getTextFromElement(null, null, getText))
        }
        return personAttr
    }

    async _getCurrentTable() {
        let arrayOfPersons = []
        let personAttr = []
        let colums = await this.selenium.findElementListBy("className", "clientDetails")
        personAttr = await this._getRowsFromTable()
        for (let i in colums) {
            let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
            for (let j in personAttr) {
                this.personDetail["'" + personAttr[j] + "'"] = await this.selenium.getTextFromElement(null, null, detailsOfPerson[j])

            }
            arrayOfPersons.push(this.personDetail)
            this.personDetail = {}
        }
        return arrayOfPersons
    }

    async openCorrectTable(input, searchBy) {
        await this.selenium.write(input, "xpath", "//input[@type='text']")
        let dropDownMenu = await this.selenium.findElementBy("className", "select-css")
        await this.selenium.clickElement(null, null, dropDownMenu)
        await this.selenium.write(searchBy, null, null, dropDownMenu, null, true)
        await this.selenium.clickElement(null, null, dropDownMenu)
        await this.selenium.sleepSec()

    }


    async searchAndValidateClient(input, searchBy) {
        let arrayOfPersons = []
        await this.openCorrectTable(input, searchBy)
        arrayOfPersons = await this._getCurrentTable()
        for (let i in arrayOfPersons) {
            if (arrayOfPersons[i]["'" + searchBy + "'"] != input) {
                return false
            }
        }
        return true

    }

}
module.exports = ClientsPage









// for (let i in colums) {
//     let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
//     for (let j in rows) {
//         let personAttribute = await this.selenium.getTextFromElement(null, null, rows[j])
//         if (personAttribute.includes(searchBy)) {
//             let value = await this.selenium.getTextFromElement(null, null, detailsOfPerson[j])
//             if(value.includes(input))
//             {
//                 console.log("\x1b[44m%s\x1b[0m" ,
//                     "you have search ->"+input +" by ->"+searchBy+"\n"+
//                     "and this is what we found at the table :)"+"\n"+
//                     personAttribute+":"+value+"\n"+
//                     "that test Pass!"
//                     )

//             }
//             else{
//                 console.log(
//                     "you have search ->"+input +" by ->"+searchBy+"\n"+
//                     "and we dont found under :)"+"\n"+
//                     personAttribute+":"+value+"\n"
//                     )
//             }
//         }
//     }
// }




//just trying another option

//  async getCurrentTable() {


    //     let rows = await this.selenium.findElementListBy("className", "table-header-th")
    //     let colums = await this.selenium.findElementListBy("className", "clientDetails")

    //     for (let j in rows) {
    //         let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
    //         for (let i in colums) {
    //             switch (i) {
    //                 case 0: detailOfPerson.fName = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 1: detailOfPerson.lname = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 2: detailOfPerson.country = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 3: detailOfPerson.email = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 4: detailOfPerson.owner = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 5: detailOfPerson.sold = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 6: detailOfPerson.contactDate = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 7: detailOfPerson.emailType = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //             }
    //         }
    //         this.arrayOfPerson.push(detailOfPerson)
    //         this.detailOfPerson = {}
    //     }

    // }

    // async isExist(input, searchBy) {
    //     let rows = await this.selenium.findElementListBy("className", "table-header-th")
    //     for (let j in arr) {
    //         let personAttribute = await this.selenium.getTextFromElement(null, null, rows[j])
    //         if (personAttribute.includes(searchBy) &&  this.arrayOfPerson[i])
    //     }

    // }