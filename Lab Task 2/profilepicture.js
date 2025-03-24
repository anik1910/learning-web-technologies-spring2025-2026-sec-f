function ppvalidation()
{
    let userid = document.getElementById('userid').value;
    let error = document.getElementById('error');
    let file = document.getElementById('file').value;

    if (userid.trim() == "")
    {
        error.innerHTML = "The field is empty";
        error.style.color = 'red';
        return;
    }
    if(userid <= 0)
    {
        error.innerHTML = "User ID must be a positive number";
        error.style.color = 'red';
    }
    if(!file.files.length)
    {
        error.innerHTML = "Please select a picture";
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid";
        error.style.color = 'green';
    }
}