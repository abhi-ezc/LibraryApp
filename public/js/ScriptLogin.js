function validateUser()
{
    if(validateLogEmail()==true&&validateLogPassword()==true)
    {
        alert('Successful login');
        return true;
        
    }
    else
    {
        alert('please check the inputs');
        return false;
    }
}

function validateLogEmail()
{
    var logEmailControl=document.getElementById("email").value;
    var logEmailPattern=/^^[A-Za-z0-9]{1}[\w\.\-]{0,}\@[A-Za-z]{0,8}\.[A-Za-z]{2,3}$/;
    if(!logEmailControl.match(logEmailPattern))
    {
        document.getElementById("reqLogEmail").innerHTML="Invalid";
       
        return false;
    }
    else
    {
        document.getElementById("reqLogEmail").innerHTML="";
        return true;
    }
}

function validateLogPassword()
{
    var logPasswdControl=document.getElementById("password").value;
    var logPasswdPattern=/^[A-Za-z0-9!@#$%&*^()_]{8,20}$/;
    if(!logPasswdControl.match(logPasswdPattern))
    {
        document.getElementById("reqLogPasswd").innerHTML="Invalid";
        return false;
    }
    else
    {
        document.getElementById("reqLogPasswd").innerHTML="";
        return true;
    }
}