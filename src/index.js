import './style.css';


const toDos = [
  {
    discription: 'The first task',
    Completed: false,
    index: 0,
  },
  {
    discription: 'The second task',
    Completed: false,
    index: 1,
  },
  {
    discription: ' The third task',
    Completed: false,
    index: 2,
  },
  {
    discription: 'The fourth task',
    Completed: false,
    index: 3,
  }
];

function ListItems() {
  let li = '';
  const unorderList = document.querySelector("#ul-list");
  toDos.forEach((item) => {
    const toDos = `
    <li>
        <div id="list-items">
          <input type="checkbox" id="item" /><label for="item">${item.discription}</label>
        </div>
        <div id="edit">
            <i id="ellipsis" class="fa-solid fa-ellipsis"></i>
        </div>
    </li>`;
    li += toDos;
  });
  unorderList.innerHTML = li;
}
ListItems();




