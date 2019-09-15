
const passingVar = require('./consts')

const handleComplaints = function(complaint) {

if(complaint.type== passingVar.FINANCE)
{
   return "Money doesn't grow on trees, you know."
}
if(complaint.type== passingVar.WEATHER)
{
   return "It is the way of nature. Not much to be done."

}
if(complaint.type== passingVar.EMOTIONS)
{
    return "It'll pass, as all things do, with time"

}

}
module.exports = handleComplaints