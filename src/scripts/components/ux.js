/* eslint-disable  no-restricted-syntax */
class Ux {
screentable = document.querySelector('.table-body')

nameInput = document.querySelector('.name-input')

scoreInput = document.querySelector('.score-input')

alert = document.querySelector('.alert')

checkIfInputsAreNotEmpty = () => {
  if (this.nameInput.value === '' || this.scoreInput.value === '') {
    return false;
  }
  return true;
}

clearInputs = () => {
  this.nameInput.value = '';
  this.scoreInput.value = '';
}

renderTable = (table) => {
  this.screentable.innerHTML = '';
  for (const row of table) {
    this.screentable.innerHTML += `<tr><td> ${row.user}: ${row.score} </td></tr>`;
  }
  this.showAlert('The table has been updated');
}

getName = () => this.nameInput.value

getScore = () => parseInt(this.scoreInput.value, 10)

showAlert = (text) => {
  this.alert.innerHTML = text;
  this.alert.classList.remove('d-none');
  setTimeout(() => { this.alert.classList.add('d-none'); }, 3000);
}
}

const UX = new Ux();
export { UX as default };