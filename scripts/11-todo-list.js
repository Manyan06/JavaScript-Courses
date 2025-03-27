// Steps (Algorithm)
// 1. Create array to store todos
// 2. When we click "Add"
// 3. Get text from textbox
// 4. Add it to Array
// 5. console.log() the array

const todoList =  [{
  name :'add',
  dueDate: '2022-12-22'
}, {
  name:'sub',
  dueDate: '2022-12-23'
}];

renderTodoList();

function renderTodoList() {

let todoListHTML = '';

for (let i = 0;  i< todoList.length; i++) {
  const todoObject = todoList[i];

  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;

  //Destructuring (shortcut)
  const {name, dueDate} = todoObject;

  const html = `
  <p>
    ${name} ${dueDate}
     <button onclick="
     todoList.splice(${i}, 1); 
     
     //splice takes in 2 numbers
     // 1.The index we want to remove
     // 2.How many values to remove

     renderTodoList();
     "> Delete </button>
  </p>
  `;
  todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
   
  todoList.push(name);  // make it array
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

// Steps (Algorithm) to display array in page
// 1. Loop through the array
// 2. Create some HTML code for each todo
// 3. Put the HTML on web page