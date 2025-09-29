const Library = {};

const LibraryList = document.querySelector('#Library');

const form = document.querySelectorAll('#newBook .inputs');

const submit = document.querySelector('#submit');

let deleteButtons = document.querySelectorAll('tr button');

function Book(name, Author, pages, publicationDate, read)
{
    this.name = name;
    this.Author = Author;
    this.pages = pages;
    this.publicationDate = publicationDate;
    this.read = read;
}

submit.addEventListener('click', function() {
    createBook(form);
    f.style.display = "none";
});

function createBook(form)
{
    for(let i = 0; i < 4; i++)
    {
        if(form[i].value === null || form[i].value === undefined || form[i].value === '')
        {
            alert("must answer all questions");
            return;
        }
    }
    
    let read = (form[4].checked) ? 'yes' : 'no';

    book = new Book(form[0].value, form[1].value, form[2].value, form[3].value, read);
    
    appendLibraryList(book);

    for(let i = 0; i < form.length; i++)
    {
        form[i].value = '';
    }
}

function appendLibraryList(Library)
{
    const child = document.createElement("tr");
    child.innerHTML = child.innerHTML = `<td>${book.name}</td><td>${book.Author}</td><td>${book.pages}</td><td>${book.publicationDate}</td><td>${book.read}</td><td><button>delete</button></td>`;
    LibraryList.appendChild(child);
    deleteButtons = document.querySelectorAll('tr button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function()
        {
            const li = this.closest('tr');
            li.remove();
        }
    )});
}





//examples
book = new Book('Harry Potter', 'J. K. Rowling', 309, '1997-06-26', 'yes');
let child = document.createElement("tr");
child.innerHTML = child.innerHTML = `<td>${book.name}</td><td>${book.Author}</td><td>${book.pages}</td><td>${book.publicationDate}</td><td>${book.read}</td><td><button>delete</button></td>`;
LibraryList.appendChild(child);

child = document.createElement("tr");
book = new Book('Wheel of Time', 'Robert Jordan', 784, '1990-01-15', 'no');
child.innerHTML = child.innerHTML = `<td>${book.name}</td><td>${book.Author}</td><td>${book.pages}</td><td>${book.publicationDate}</td><td>${book.read}</td><td><button>delete</button></td>`;
LibraryList.appendChild(child);

deleteButtons = document.querySelectorAll('tr button');

deleteButtons.forEach(button => {
    button.addEventListener('click', function()
{
    const li = this.closest('tr');
    li.remove();
})
})


const f = document.querySelector("#newBook");

const formButton = document.querySelector("#formButton");

formButton.addEventListener('click', function()
{
    f.style.display = "block";
})