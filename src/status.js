function updateStatus(e, i) {
  const listSaved = JSON.parse(localStorage.getItem('listSaved'));
  listSaved[i].completed = !listSaved[i].completed;
  e.target.checked = listSaved[i].completed;
  localStorage.setItem('listSaved', JSON.stringify(listSaved));
}
export default updateStatus;