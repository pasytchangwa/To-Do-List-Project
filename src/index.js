// import _ from 'lodash';
import './style.css';
import './sorting';
import './status';

let lists = [];

lists = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'cook',
    completed: false,
    index: 1,
  },
  {
    description: 'study',
    completed: false,
    index: 2,
  },
  {
    description: 'sleep',
    completed: false,
    index: 3,
  },
];

function displayel(lists) {
  const element = document.querySelector('.list-items');
  const todoLists = lists
    .map(
      (list) => `<li class='list-item'>
  <p class='info'><span class='material-icons' id ='${list.index}'>
  check_box_outline_blank</span>${list.description}</p>
  <span class='material-icons delete' id ='${list.index}'>
  more_vert</span></li>`,
    )
    .join('');
  element.innerHTML = todoLists;
}

document.addEventListener('load', displayel(lists));
