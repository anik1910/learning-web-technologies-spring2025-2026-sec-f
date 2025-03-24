function degreevalidation()
{
    let degrees = document.getElementsByName("degree");
    let error = document.getElementById('error')
    let isSelected = false;

    for (let degree of degrees)
    {
        if(degree.checked)
        {
            isSelected = true;
            break;
        }
    }
    if(!isSelected)
    {
        error.innerHTML = "Please select a Degree";
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid";
        error.style.color = 'green';
    }
}