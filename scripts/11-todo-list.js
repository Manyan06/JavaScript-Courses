// Steps (Algorithm)
// 1. Create array to store todos
// 2. When we click "Add"
// 3. Get text from textbox
// 4. Add it to Array
// 5. console.log() the array

const todoList =  ['add', 'sub'];

renderTodoList();

function renderTodoList() {

let todoListHTML = '';

for (let i = 0;  i< todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value
  

  todoList.push(name);  // make it array
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

// Steps (Algorithm) to display array in page
// 1. Loop through the array
// 2. Create some HTML code for each todo
// 3. Put the HTML on web page