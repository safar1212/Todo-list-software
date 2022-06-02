import './style.css';

import { toDos, listItems } from './listItem.js';

const inputField = document.querySelector('#input #input-field');

let editId;

let isEditedTask = false;

window.editTask = function (taskId, taskName) {
  editId = taskId;
  isEditedTask = true;
  inputField.value = taskName;
};

inputField.addEventListener('keyup', (e) => {
  const inputLetter = inputField.value.trim();
  if (e.key === 'Enter' && inputLetter) {
    if (!isEditedTask) {
      if (!toDos) {
        toDos = [];
      }
      const taskInfo = { task: inputLetter, Completed: 'false', index: toDos.length + 1 };
      toDos.push(taskInfo);
    } else {
      isEditedTask = false;
      toDos[editId].task = inputLetter;
    }
    inputField.value = '';

    localStorage.setItem('todo-list', JSON.stringify(toDos));
    listItems();
  }
});
