// import _ from 'lodash';
import './style.css';
import {
  dragStart,
  allowDrop,
  dragEnd,
  drop,
  dragEnter,
  dragLeave,
} from './drag';
import statusUpdate from './status';

let listCollection = [];

listCollection = [
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
const element = document.querySelector('.list-items');

function displayel(lists) {
  const todoLists = lists
    .map(
      (list) => `<li class='list-item' draggable='true' id='${list.index}>
  <div class='infos><input type='checkbox' class='box' data-id='${list.index}' 
  ${list.completed ? 'checked' : ''}></input><input type='text' value='${
  list.description}' data-index='${list.index}' draggable='false' class='list-item-text ${
  list.completed ? 'completed' : ''}'></div>
  <span class='material-icons handler' data-id='${list.index}'>
  more_vert</span></li>`,
    ).join('');
  element.innerHTML = todoLists;

  element.addEventListener('dragenter', dragEnter);

  document.querySelectorAll('.list-item').forEach((lt) => {
    lt.addEventListener('dragstart', dragStart);
    lt.addEventListener('dragend', dragEnd);
    lt.addEventListener('dragenter', dragEnter);
    lt.addEventListener('dragleave', dragLeave);
    lt.addEventListener('drop', drop);
    lt.addEventListener('dragover', allowDrop);
  });

  document.querySelectorAll('.list-item-text').forEach((text) => {
    text.addEventListener('focus', (event) => {
      document.querySelectorAll('.list-item').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
      event.target.parentNode.style.backgroundColor = '#fea';
    });
    text.addEventListener('blur', () => {
      document.querySelectorAll('.list-item').forEach((lt) => {
        lt.style.backgroundColor = '#fff';
      });
    });
  });

  const boxes = document.querySelectorAll('.box');
  boxes.forEach((b) => {
    b.addEventListener('change', statusUpdate);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('listCollection')) {
    listCollection = JSON.parse(localStorage.getItem('listCollection'));
  } else {
    localStorage.setItem(
      'listCollection',
      JSON.stringify(listCollection.sort((a, b) => +a.index - +b.index)),
    );
  }

  displayel(listCollection.sort((a, b) => +a.index - +b.index));
});
