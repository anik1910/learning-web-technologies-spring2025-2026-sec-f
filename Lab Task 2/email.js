const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function emailvalidation()
{
    let email = document.getElementById('email').value;
    let error = document.getElementById('error');
   if (email == "")
    {
        error.innerHTML = "The field is empty";
        error.style.color = 'red';
    } 
    else if (!emailFormat.test(email))
    {
        error.innerHTML = "Invalid email format. Use example@example.com"
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid Email"
        error.style.color = 'green';
    }
}