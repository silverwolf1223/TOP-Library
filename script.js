const Library = [];

const LibraryList = document.querySelector('#Library');

const form = document.querySelectorAll('#newBook input');

const submit = document.querySelector('#submit');

function Book(name, Author, pages, read)
{
    this.name = name;
    this.Author = Author;
    this.pages = pages;
    this.read = read;
}

submit.addEventListener('click', function() {
    createPushBook(form);
});

function createPushBook(form)
{
    for(let i = 0; i < 3; i++)
    {
        if(form[i].value === null || form[i].value === undefined || form[i].value === '')
        {
            console.log("must answer all questions");
            return;
        }
    }
    let read;
    if(form[3].value == 'on')
    {
        read = 'yes';
    }
    else
    {
        read = 'no';
    }
    let book = new Book(form[0].value, form[1].value, form[2].value, read);
    
    Library.push(book);

    appendLibraryList(Library);
}

function appendLibraryList(Library)
{
    const child = document.createElement("li");
    child.textContent = `Title: ${Library[0].value} \n Author: ${Library[1].value} \n $ of Pages ${Library[0].value}`;
    LibraryList.appendChild(child);
}