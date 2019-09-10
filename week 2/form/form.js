const getForm = function ()
{
    let fname=document.getElementById("fname").value
    let desiredSalary=document.getElementById("desiredSalary").value
    let bday=document.getElementById("bday").value
    let phone=document.getElementById("phone").value

    document.getElementById("fname").value =""
    document.getElementById("desiredSalary").value=""
    document.getElementById("bday").value=""
    document.getElementById("phone").value=""

    console.log(phone)


    if(fname=="")
    {
        document.getElementById("validition").innerHTML = "the name is null!";


    }
    if(bday=="")
    {
        document.getElementById("validition").innerHTML = "you must enter bday!";
    }
    if(desiredSalary<10000 || desiredSalary>16000)
    {
        document.getElementById("validition").innerHTML = "Salary must be greater than 10,000 but less than 16,000!";
    }
    if(phone.length!=10)
    {
        document.getElementById("validition").innerHTML = "phone number must have 10 digits";
    }





}