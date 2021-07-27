/* eslint-disable  no-restricted-syntax */
class Ux {
screentable = document.querySelector('.table')

nameInput = document.querySelector('.name-input')

scoreInput = document.querySelector('.score-input')

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
}

getName = () => this.nameInput.value

getScore = () => parseInt(this.scoreInput.value, 10)
}

const UX = new Ux();
export { UX as default };