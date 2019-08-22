function validateForm()
{
    if(validateName()==true && validateAge()==true && validateMobile()==true && validateEmail()==true && validatePassword()==true && validateConfirmPassword()==true)
    {
        alert('Thanks! , We are glad to have you.');
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
     document.getElementById("regName").innerHTML="Invalid"; 
     return false;

    }
    document.getElementById("regName").innerHTML="";
    return true;
}

function validateAge()
{
    var ageControl=document.getElementById("age").value;
    var agePattern=/^^[1-9]\d{0,1}$/;
    if(!ageControl.match(agePattern))
       {
        document.getElementById("regAge").innerHTML="Invalid";
         return false;
       }
       else
       {
        document.getElementById("regAge").innerHTML="";
           return true;
       }
}

function validateMobile()
{
    var mobileControl=document.getElementById("mobile").value;
    var mobilePattern=/^^[1-9]\d{9}$/;
    if(!mobileControl.match(mobilePattern))
       {
        document.getElementById("regMobile").innerHTML="Invalid";     
        return false;
       }
       else
       {
         document.getElementById("regMobile").innerHTML="";
         return true;
       }
}

function validateEmail()
{
    var emailControl=document.getElementById("email").value;
    var emailPattern=/^^[A-Za-z0-9]{1}[\w\.\-]{0,}\@[A-Za-z]{0,8}\.[A-Za-z]{2,3}$/;
    if(!emailControl.match(emailPattern))
    {
        document.getElementById("regEmail").innerHTML="Invalid";    
        return false;
    }
    else
    {
        document.getElementById("regEmail").innerHTML="";
         return true;
    }
}

function validatePassword()
{
    var passwdControl=document.getElementById("password").value;
    var passwdPattern=/^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
    if(!passwdControl.match(passwdPattern))
    {
        document.getElementById("regPassword").innerHTML="Password should contain 8 characters"; 
        return false;
    }
        document.getElementById("regPassword").innerHTML="";
        return true;
}

function validateConfirmPassword()
{
    var passwdControl = document.getElementById("password").value;
    var confirmPasswdControl = document.getElementById("confirm_password").value;
    if(passwdControl !== confirmPasswdControl)
    {
        document.getElementById("regConfirmPassword").innerHTML="The specified passwords do not match";
        return false;
    }
    else
    {
        document.getElementById("regConfirmPassword").innerHTML="";
        return true;
    }
}