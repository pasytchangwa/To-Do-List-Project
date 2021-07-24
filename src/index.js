// import _ from 'lodash';
import newTask from './addRemove';

document.getElementById('.enter').addEventListener('click', (e) => {
  const v = document.querySelector('#item').value;
  if (v === '') {
    e.preventDefault();
  } else {
    newTask(v);
  }
});