const input = document.querySelector('input');
const ul = document.querySelector('ul')

// function to add item
function addItem(){
// getting input value
const inputValue = input.value.trim();
// check if the imput not empty
if(inputValue !== ''){
    // creating li element
    ul.innerHTML += `
        <li>
            <div class='task-name'>
                <input type='checkbox' onchange='asCompleted(this)'/>
                <span>${inputValue}</span>
            </div>
            <div class='buttons'>
                <button onclick='editItem(this)'>Edit</button>
                <button onclick='deleteItem(this)'>Delete</button>
            </div>
        </li>
        `
}
// clear the input value
input.value = ''; 
saveToLocalStorage();

}

// function to mark task as completed
function asCompleted(checkbox){
    const taskCompleted = checkbox.nextElementSibling;
    // creating class for styling
    taskCompleted.classList.toggle('completed', checkbox.checked)
    saveToLocalStorage();
}

// function to delete task in the list
function deleteItem(button){
    const liElement = button.parentElement.parentElement;
    const ulElement = liElement.parentElement;
    ulElement.removeChild(liElement);
    saveToLocalStorage();
}

// function to edit tha task
    function editItem(button){
        // Get the parent <li> element
    let listItem = button.closest('li');

    // Get the <span> element within the task-name class
    let taskNameSpan = listItem.querySelector('.task-name span');

    // Get the current text content of the span
    let currentText = taskNameSpan.textContent;
    input.value = currentText;
    const liElement = button.parentElement.parentElement;
    const ulElement = liElement.parentElement;
    ulElement.removeChild(liElement);
    saveToLocalStorage();
}  

function saveToLocalStorage(){
    localStorage.setItem('tasks', ul.innerHTML)
}

function readLocalStorage(){
    ul.innerHTML = localStorage.getItem('tasks');
}
readLocalStorage();