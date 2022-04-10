const inputItem = document.getElementById('inputItem');
const submitButton = document.getElementById('btn');
const todoDiv = document.getElementById('todo-div');
//const item = document.querySelector('#item');

const todoArray = [];
 

submitButton.addEventListener('click',(event) => {
    event.preventDefault();
    const todo = inputItem.value;
    console.log(todo);

const list = document.createElement('li');
list. classList.add('list-group-item')
list.innerHTML = `${todo}`;

const ul = document.createElement('ul');
ul.classList.add('list-group');
ul.appendChild(list);
todoDiv.appendChild(ul);

const todoArray = [
todo
];
console.log(todoArray);

todo.value = '';
})


