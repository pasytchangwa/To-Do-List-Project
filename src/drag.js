let current = null;
let targetItem = null;

export function dragStart() {
  current = this;
  current.classList.add('current-active');
}

export function dragEnd() {
  current.classList.remove('current-active');
  current = null;
}

export function dragEnter(event) {
  event.preventDefault();
}

export function dragLeave() {
  targetItem = null;
}

export function allowDrop(event) {
  event.preventDefault();
}

export function drop(event) {
  event.preventDefault();
  targetItem = document.getElementById(event.target.id);
  current.parentElement.insertBefore(current, targetItem);

  const children = Array.from(current.parentElement.children);
  const updatedList = children.map((child, index) => ({
    index,
    completed: child.checked,
    description: child.children[1].value,
  }));
  localStorage.setItem('listCollection', JSON.stringify(updatedList));
}
