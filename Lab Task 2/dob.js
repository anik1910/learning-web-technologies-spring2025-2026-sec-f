function dobvalidation()
{
    let dd = document.getElementById('dd').value;
    let mm = document.getElementById('mm').value;
    let yyyy = document.getElementById('yyyy').value;
    let error = document.getElementById('error');

    if (dd == "")
    {
        error.innerHTML = "Enter the date";
        error.style.color = 'red';
        return;
    }
    else if(1 > dd || dd > 31)
    {
        error.innerHTML = 'The date field should be between 1-31';
        error.style.color = 'red';
        return;
    }
    if (mm == "")
    {
        error.innerHTML = "Enter the month";
        error.style.color = 'red';
        return;
    }
    else if(1 > mm || mm > 12)
    {
        error.innerHTML = 'The month field should be between 1-12';
        error.style.color = 'red';
        return;
    }
    if (yyyy == "")
    {
        error.innerHTML = "Enter the Year";
        error.style.color = 'red';
        return;
    }
    else if(1900 > yyyy || yyyy > 2016)
    {
        error.innerHTML = 'The month field should be between 1900-2016';
        error.style.color = 'red';
        return;
    }
    else
    {
        error.innerHTML = "Valid";
        error.style.color = 'green';
    }
}