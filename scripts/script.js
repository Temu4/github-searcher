import api from './api.js';
import generateUsersList from './generateUsersList.js';
import createCardContent from './generateUser.js';

const {getUsers, getUserDetails} = api;

document.forms.userSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchName = e.target.username.value;

  getUsers(searchName).then((data) => {
    document.getElementById('usersResult').innerHTML = generateUsersList(data);
  });
});

const usersResult = document.querySelector('#usersResult');
usersResult.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('user-card')) {
    getUserDetails(event.target.href).then((data) => {
      document.getElementById('userDetail').innerHTML = createCardContent(data);
    });
  }
});
