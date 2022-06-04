import { listItems } from './listItem.js';

const clearButton = document.querySelector('#clear-button');

const clearTodos = (toDos) => {
  toDos = toDos.filter((todo) => todo.Completed === false);
  toDos = toDos.map((todo, index) => {
    todo.index = index + 1;
    return todo;
  });
  localStorage.setItem('todo-list', JSON.stringify(toDos));
  listItems();
};

export { clearButton, clearTodos };
