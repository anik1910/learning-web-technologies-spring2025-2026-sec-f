function bloodgroupvalidation()
{
    let bloodgroup = document.getElementById('bloodgroup').value;
    let error = document.getElementById('error');
    
    if(bloodgroup == "")
    {
        error.innerHTML = "Must be selected";
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid";
        error.style.color = 'green';
    }
}