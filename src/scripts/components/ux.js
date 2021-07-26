class Ux {

screentable = document.querySelector('.table')
nameInput = document.querySelector('.name-input')
scoreInput = document.querySelector('.score-input')


checkIfInputsAreNotEmpty = () => {
    if (this.nameInput.value === '' || this.scoreInput.value === ''){
        return false
    } else {
        return true
    }
}

clearInputs = () => {
    this.nameInput.value = '' ;
    this.scoreInput.value = '' ;
}

renderTable = (table) => {
    this.screentable.innerHTML = ''
    for (let row of table){
        this.screentable.innerHTML += `<tr><td> ${row.name}: ${row.score} </td></tr>`}
    }

getName = () => {
    return this.nameInput.value
}
getScore = () => {
    return this.scoreInput.value
}
}

const UX = new Ux
export {UX}