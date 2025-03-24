const nameFormat = /^[a-zA-Z][a-zA-Z.\-]*\s+[a-zA-Z.\-]+$/;
function namevalidation()
{
    let name = document.getElementById('name').value;
    let error = document.getElementById('error');
   if (name == "")
    {
        error.innerHTML = "The field is empty";
        error.style.color = 'red';
    } 
    else if (!nameFormat.test(name))
    {
        error.innerHTML = "Invalid format. Name must start with a letter, contain at least two words, and may include dot (.) or dash (-)"
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid Name"
        error.style.color = 'green';
    }
}