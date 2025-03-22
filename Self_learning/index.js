function usernamevalidation()
{
    let username = document.getElementById('username').value;
    let usernameerror = document.getElementById('usernameerror');
    if (username == "")
    {
        usernameerror.innerHTML = "The User Name field is required";
        usernameerror.style.color = 'red'; 
    }
    else
    {
        usernameerror.innerHTML = "";
    }
}
function passwordvalidation()
{
    let password = document.getElementById('password').value;
    let passworderror = document.getElementById('passworderror');
    if(password == "")
    {
        passworderror.innerHTML = "The Password field is required"
        passworderror.style.color = 'red';
    }
    else
    {
        passworderror.innerHTML = "";
    }
}