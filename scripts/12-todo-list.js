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

todoList.forEach(function(todoObject, index) {
  const {name, dueDate} = todoObject;
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${index}, 1); 

    renderTodoList();
    " class="delete-todo-button"> Delete </button>`;
  todoListHTML += html;
});


document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

  todoList.push({
    name: name, 
    dueDate: dueDate
  });  // make it array
  // or just type (shorthand property)
  //name,
  //dueDate });
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

// Steps (Algorithm) to display array in page
// 1. Loop through the array
// 2. Create some HTML code for each todo
// 3. Put the HTML on web page