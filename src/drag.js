let target;

function sorting(source, target) {
  const listSaved = JSON.parse(localStorage.getItem('listSaved'));
  if (listSaved.length < 2) return;

  const sourceObj = listSaved[source];
  const souceIndex = listSaved[source].index;
  let targetIndex;
  listSaved.forEach((object) => {
    if (object.index === Number(target)) {
      targetIndex = listSaved.indexOf(object);
    }
  });

  listSaved[source].index = listSaved[targetIndex].index;
  listSaved[targetIndex].index = souceIndex;

  listSaved[source] = listSaved[targetIndex];
  listSaved[targetIndex] = sourceObj;
  localStorage.setItem('listSaved', JSON.stringify(listSaved));
}

export default function dragAndDrop(event, index) {
  const newEvent = event.type;
  const source = index;
  switch (newEvent) {
    case 'dragstart':
      event.target.classList.add('dragging');
      break;
    case 'dragend':
      event.target.classList.remove('dragging');
      sorting(source, target);
      break;
    case 'dragover':
      if (event.target.className === 'list-item') {
        target = event.target.children[2].innerHTML;
      }
      break;
    default:
      break;
  }
}
