import './style.css';
import dragAndDrop from './drag';
import updateStatus from './status';

class CollectedList {
  constructor() {
    this.size = 0;
    this.element = document.querySelector('.list-items');
    this.listSaved = JSON.parse(localStorage.getItem('listSaved')) || [];
  }

  clearList() {
    this.listSaved = this.listSaved.filter(
      (object) => object.completed !== true,
    );
    localStorage.setItem('listSaved', JSON.stringify(this.listSaved));
  }

  addIndex() {
    if (this.listSaved.length < 1) {
      return this.size;
    }
    return this.listSaved[this.listSaved.length - 1].index + 1;
  }

  addTodo(list) {
    this.listSaved.push(list);
    localStorage.setItem('listSaved', JSON.stringify(this.listSaved));
    this.size += 1;
  }

  updateList() {
    let newIndex = 0;
    this.listSaved = JSON.parse(localStorage.getItem('listSaved')) || [];
    this.listSaved.forEach((object) => {
      newIndex += 1;
      object.index = newIndex;
    });
    localStorage.setItem('listSaved', JSON.stringify(this.listSaved));
  }

  edditTask(e, i) {
    if (e.key === 'Enter') {
      this.listSaved[i].description = e.target.innerHTML;
      localStorage.setItem('listSaved', JSON.stringify(this.listSaved));
      this.displayAllTodo();
      e.preventDefault();
    }
    e.target.parentNode.children[1].contentEditable = true;
  }

  deleteTodo(e, i) {
    this.listSaved.splice(i, 1);
    localStorage.setItem('listSaved', JSON.stringify(this.listSaved));
    this.displayAllTodo();
  }

  displayAllTodo() {
    this.ul.innerHTML = '';
    this.updateList();

    this.listSaved.forEach((todo, i) => {
      const li = document.createElement('li');
      li.className = 'list-item';
      li.draggable = 'true';
      li.addEventListener('dragstart', (e) => {
        dragAndDrop(e, i);
      });

      li.addEventListener('dragend', (e) => {
        dragAndDrop(e, i);
        this.displayAllTodo();
      });

      const container = document.createElement('div');
      container.className = 'infos';

      const box = document.createElement('input');
      box.type = 'checkbox';
      box.className = 'box';
      box.checked = todo.completed;
      box.addEventListener('change', (e) => {
        updateStatus(e, i);
        this.displayAllTodo();
      });

      const p = document.createElement('p');
      const index = document.createElement('span');
      index.className = 'index';
      const more = document.createElement('span');
      more.classList.add('material-icons', 'handler');
      more.innerHTML = 'more_vert';
      p.addEventListener('click', (e) => {
        this.edditTodo(e, i);
      });
      more.addEventListener('click', (e) => {
        more.classList.add('delete');
        more.innerHTML = 'delete_outline';
        document.querySelector('.delete').addEventListener('click', (e) => {
          this.deleteTodo(e, i);
        });
        this.edditTodo(e, i);
      });

      p.innerHTML = todo.description;
      index.innerHTML = todo.index;
      container.appendChild(box);
      container.appendChild(p);
      li.appendChild(container);
      // li.appendChild(index);
      li.appendChild(more);
      this.element.appendChild(li);
      this.element.addEventListener('dragover', (e) => {
        dragAndDrop(e, i);
      });
    });
  }
}

const newList = new CollectedList();

export default function addTodo(v) {
  newList.addTodo({
    description: v,
    completed: false,
    index: newList.addIndex(),
  });
  newList.displayAllTodo();
}

document.getElementById('clear-btn').addEventListener('click', () => {
  newList.clearList();
});

window.addEventListener('load', () => {
  newList.displayAllTodo();
});
