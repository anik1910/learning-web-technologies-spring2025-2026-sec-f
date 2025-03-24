function ppvalidation()
{
    let userid = document.getElementById('userid').value;
    let error = document.getElementById('error');
    let file = document.getElementById('file').files;

    if (userid.trim() == "")
    {
        error.innerHTML = "The User Id is empty";
        error.style.color = 'red';
        return;
    }
    if(Number(userid) <= 0)
    {
        error.innerHTML = "User ID must be a positive number";
        error.style.color = 'red';
        return;
    }
    if(!file.length)
    {
        error.innerHTML = "Please select a picture";
        error.style.color = 'red';
        return;
    }
    else
    {
        error.innerHTML = "Valid";
        error.style.color = 'green';
    }
}