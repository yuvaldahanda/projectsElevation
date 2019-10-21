

class analyticPage {
    constructor(selenium) {
        this.selenium = selenium
    }

    async navigateToAnalyticsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics")
        await this.selenium.waitUntilElementExist("className", "badge-val")
    }
   
   
    //private function that gettind the index of value from action page and get the text from that value 
    //the function wait that there will be text at the value And once there is text its return the text
    async _getBadgeValue(i)
    {
        let time = 0
        let timeToEndLoop=250
        let text = null
        let array = await this.selenium.findElementListBy("className", "badge-val")
        while (time < timeToEndLoop) {
                text = await this.selenium.getTextFromElement(null, null, array[i])
                if (text != 0) 
                    return text   
            time++
        }
    }
   
    //sending the email senet index to get the badge value
    async getEmailSent() {
            return this._getBadgeValue(1)
    }
     //sending the outstanding client index the get the badge value
    async getOutStandingClient()
    {
        return this._getBadgeValue(2)
    }
    //getting the hottest country that appear at analytic page
    async getHottestCountry() {
        return this._getBadgeValue(3)

    }

}
module.exports = analyticPage