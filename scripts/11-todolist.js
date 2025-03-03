const todoList = ['watch youtube','wash dishes'];
let todoListHTML = '';
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  for(i = 0; i < index.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    console.log(todoListHTML);
  }

function addTodo(){
  const inputElement = document.querySelector('.js-input-todo');
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = '';
}
