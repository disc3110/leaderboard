import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import UX from './components/ux';
import User from './components/user';
import UsersTable from './components/users-table';

const sumitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

const userTable = new UsersTable();

sumitBtn.addEventListener('click', () => {
  if (UX.checkIfInputsAreNotEmpty()) {
    const user = new User(UX.getName(), UX.getScore());
    userTable.addToTable(user);
    UX.clearInputs();
  }
});

refreshBtn.addEventListener('click', () => {
  UX.renderTable(userTable.getTable);
});
