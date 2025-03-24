function namevalidation()
{
    let name = document.getElementById('name').value;
    let error = document.getElementById('error');

    if (name.trim() == "")
        {
            error.innerHTML = "The field is empty";
            error.style.color = 'red';
            return;
        }
    let word = name.split(" ");
    let wordCount = 0;

    for(let i = 0; i < word.length; i++)
    {
        if(word[i] !== "")
        {
            wordCount++;
        }
    }
    if(wordCount < 2)
    {
        error.innerHTML = "Invalid name-Must contain at least two words";
        error.style.color = 'red';
    }
    if (!(name[0] >= 'A' && name[0] <= 'Z') && !(name[0] >= 'a' && name[0] <= 'z'))
    {
        error.innerHTML = "Invalid name-Must start with a letter";
        error.style.color = 'red';
    }
    else if(!((name >= 'A' && name <= 'Z') || !(name >= 'a' && name <= 'z') || char === '.' || char === '-' || char === ' '))
    {
        error.innerHTML = "Invalid name-Only letters, dot (.), and dash (-) are allowed";
        error.style.color = 'red';
    }
    else
    {
        error.innerHTML = "Valid Name";
        error.style.color = 'green';
    }
}