export default function statusUpdate(event) {
  event.target.nextElementSibling.classList.toggle('completed');
  const status = JSON.parse(localStorage.getItem('listCollection'));
  status[event.target.dataset.id].completed = event.target.checked;
  localStorage.setItem('listCollection', JSON.stringify(status));
}
