function emailvalidation()
{
    let email = document.getElementById('email').value;
    let error = document.getElementById('error');

    if (email.trim() == "")
    {
        error.innerHTML = "The field is empty";
        error.style.color = 'red';
        return;
    }

    if (!(email[0] >= 'A' && email[0] <= 'Z') && !(email[0] >= 'a' && email[0] <= 'z')&& !(email[0] >= '0' && email[0] <= '9'))
    {
        error.innerHTML = "Invalid Email-Must start with a letter or number";
        error.style.color = 'red';
    }
    else if(!email.includes('@') || !email.includes('.'))
    {
        error.innerHTML = "Invalid email-Must contain '@' and '.'";
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid Name";
        error.style.color = 'green';
    }
}