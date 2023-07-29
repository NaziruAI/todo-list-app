const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked');
    formValidation();
});

let formValidation = () => {
    if(input.value === ''){
        alert('Task should not be blank');
        console.log('failure');
    }
    else{
        console.log('success');
        acceptTask();
    }
  
}

let task = {};
let acceptTask = () => {
    task['text'] = input.value;
    console.log(task);
    createTask();
}

const h3 = document.querySelector('h3');

 let createTask = () => {
    ul.innerHTML += `
    <li id='task'>
        <p>${task.text}</p>
        <soan class='icons'>
            <i onclick="editTask(this)" class='fas fa-edit'></i>
            <i onclick="deleteTask(this)" class='fas fa-trash-alt'></i>
        </span>    
   </li>`;
   input.value = '';
   saveToLocalStorage();

    }

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    saveToLocalStorage();
};

let editTask = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    saveToLocalStorage();
}

let saveToLocalStorage = () => {
    localStorage.setItem('data', ul.innerHTML)
}

let readLocalStorage = () => {
    ul.innerHTML = localStorage.getItem('data');
}

readLocalStorage();