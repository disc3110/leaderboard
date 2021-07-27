import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import UX from './components/ux';
import User from './components/user';
import APIManager from './components/api';

const sumitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

const API = new APIManager();

sumitBtn.addEventListener('click', () => {
  if (UX.checkIfInputsAreNotEmpty()) {
    const user = new User(UX.getName(), UX.getScore());
    API.addUser(user);
    UX.clearInputs();
  }
});

refreshBtn.addEventListener('click', () => {
  API.getUsers().then((users) => {
    UX.renderTable(users);
  });
});