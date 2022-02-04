const createCard = ({login, url}) => `<li><a class="user-card" href="${url}">${login}</a></li>`;

const generateUsersList = (users) => {
  let data = '';

  users.forEach((element) => {
    data += createCard(element);
  });
  return data;
};

export default generateUsersList;
