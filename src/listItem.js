let toDos = JSON.parse(localStorage.getItem('todo-list')) || [];

function listItems() {
  toDos = JSON.parse(localStorage.getItem('todo-list')) || [];
  let li = '';
  const unorderList = document.querySelector('#ul-list');
  toDos.forEach((todo, id) => {
    const list = `
      <li>
          <div id="list-items">
            <input class="checked" type="checkbox" id="${id}"/>
            <label id="task" for="${id}">${todo.task}</label>
          </div>
          <div id="edit">
              <i id="ellipsis" class="fa-solid fa-ellipsis"></i>
              <ul id="delete-box">
                  <li onclick="editTask(${id}, '${todo.task}')"><i class="fa-solid fa-pen"></i>Edit</li>
                  <li onclick="deleteTask(${id})"><i class="fa-solid fa-trash"></i>Delete</li>
              </ul>
          </div>
      </li>`;
    li += list;
  });
  unorderList.innerHTML = li;

  window.deleteTask = function (deletedId) {
    toDos.splice(deletedId, 1);
    toDos = toDos.map((todo, index) => {
      todo.index = index + 1;
      return todo;
    });
    localStorage.setItem('todo-list', JSON.stringify(toDos));
    listItems();
  };

  const input = document.querySelectorAll('.checked');

  input.forEach((box) => {
    box.addEventListener('change', () => {
      const taskName = box.parentElement.lastElementChild;
      if (box.checked) {
        taskName.classList.add('clicked');
        toDos[box.id].Completed = true;
      } else {
        taskName.classList.remove('clicked');
        toDos[box.id].Completed = false;
      }
      localStorage.setItem('todo-list', JSON.stringify(toDos));
    });
  });
}

window.addEventListener('load', listItems);

export { toDos, listItems };