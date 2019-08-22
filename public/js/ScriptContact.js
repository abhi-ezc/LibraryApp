function validateMessage()
{
    if(validateName()==true && validateMobile()==true && validateEmail()==true)
    {
        alert('We will contact you soon. Thanks!');
        return true;
    }
    else
    {
        alert('Sorry! , Something is wrong with the information.')
        return false;
    }
}

function validateName()
{
    var nameControl=document.getElementById("name").value;
    var namePattern=/^[A-Za-z]{1}[A-Z\s]+$/gi;
    if(!nameControl.match(namePattern))
    {
     document.getElementById("reqContactName").innerHTML="Invalid";
     document.getElementById("name").focus();   
     return false;

    }
    document.getElementById("reqContactName").innerHTML="";
    return true;
}

function validateEmail()
{
    var emailControl=document.getElementById("email").value;
    var emailPattern=/^^[A-Za-z0-9]{1}[\w\.\-]{0,}\@[A-Za-z]{0,8}\.[A-Za-z]{2,3}$/;
    if(!emailControl.match(emailPattern))
    {
        document.getElementById("reqContactEmail").innerHTML="Invalid";
        document.getElementById("email").focus();     
        return false;
    }
    else
    {
        document.getElementById("reqContactEmail").innerHTML="";
         return true;
    }
}

function validateMobile()
{
    var mobileControl=document.getElementById("mobile").value;
    var mobilePattern=/^^[1-9]\d{9}$/;
    if(!mobileControl.match(mobilePattern))
       {
        document.getElementById("reqContactMobile").innerHTML="Invalid";
        document.getElementById("mobile").focus();     
        return false;
       }
       else
       {
         document.getElementById("reqContactMobile").innerHTML="";
         return true;
       }
}