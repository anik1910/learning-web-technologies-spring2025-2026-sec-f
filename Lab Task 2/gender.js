function gendervalidation()
{
    let genders = document.getElementsByName("gender");
    let error = document.getElementById('error')
    let isSelected = false;

    for (let gender of genders)
    {
        if(gender.checked)
        {
            isSelected = true;
            break;
        }
    }
    if(!isSelected)
    {
        error.innerHTML = "Please select a gender";
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid";
        error.style.color = 'green';
    }
}