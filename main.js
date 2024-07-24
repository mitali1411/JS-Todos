let themeBtn = document.getElementById('theme_btn');
let navbar = document.querySelector('nav');
let logo = document.querySelector('span');
let container = document.querySelector('#container');
let cards = document.querySelectorAll('.card');
let h5 = document.querySelectorAll('h5');
let listItems = document.querySelectorAll('li');
let input = document.querySelector('input');
let form = document.querySelector('form');
let listGroup = document.querySelector('ul');



// CHANGE THEME
let count = 1;

const changeTheme = () => {
    // console.log('changed!!')
   if(count%2 === 0){
    navbar.className = 'navbar bg-body-secondary shadow px-4 border-bottom border-dark border-2';
    logo.className = 'navbar-brand mb-0 h1 text-dark';
    themeBtn.className = 'fa-regular fa-moon text-dark h4';
    container.className = 'container-fluid p-5 d-flex align-items-center flex-column bg-light';
    input.className = 'form-control bg-light';

    h5.forEach((h5)=> {
        h5.className = 'text-dark text-center mx-3';
    });

    cards.forEach((card) => {
        card.className = 'card w-75 p-3 my-3'
    });

    listItems.forEach((li) => {
        li.className = 'list-group-item text-secondary my-1'
    });

   }else {
    navbar.className = 'navbar bg-dark shadow px-4 border-bottom border-2';
    logo.className = 'navbar-brand mb-0 h1 text-light';
    themeBtn.className = 'fa-regular fa-sun text-warning h4';
    container.className = 'container-fluid p-5 d-flex align-items-center flex-column bg-dark';
    h5.className = 'text-light mx-3';
    input.className = 'form-control bg-secondary border-dark';

    h5.forEach((h5)=> {
        h5.className = 'text-light text-center mx-3';
    });
    
    cards.forEach((card) => {
        card.className = 'card w-75 p-3 my-3 bg-dark border-light text-light'
    });

    listItems.forEach((li) => {
        li.className = 'list-group-item bg-secondary text-light my-1'
    })
   };
   count++;
};
themeBtn.addEventListener('click', changeTheme);


// SAVE TODO
const saveTodo = (event) => {
    event.preventDefault();

    // Creating New List
    let newList = document.createElement('li');
    newList.innerText = input.value;
    newList.className = 'list-group-item bg-secondary text-light my-1'

    
    // if(count%2 === 0){
    //     newList.className = 'form-control bg-light'
    // }else{
    //     newList.className = 'form-control bg-secondary border-dark'
    // }

    // Adding Delete BTn
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete'
    deleteBtn.className = 'btn btn-danger float-end btn-sm';

    newList.appendChild(deleteBtn);

    // Adding LI to UL
    listGroup.appendChild(newList);

    form.reset();
}
form.addEventListener('submit', saveTodo)



// DELETE TODO
const deleteTodo = (e) => {
    if(e.target.className.includes('btn-danger')){
        let li = e.target.parentElement;
            if(window.confirm('Are You Sure?')){
                listGroup.removeChild(li);
            }
    }
}

listGroup.addEventListener('click', deleteTodo)