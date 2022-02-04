const BASE_API = 'https://api.github.com';
const URL_USERS_SEARCH = '/search/users';

const fetchApi = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Issue with fetch, status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.warn(error);
  }
};

const getUsers = async (searchItem) => {
  const data = await fetchApi(`${BASE_API}${URL_USERS_SEARCH}?q=${searchItem}`);

  const users = data.items;

  return users;
};

const getUserDetails = async (href) => {
  const data = await fetchApi(href);
  return data;
};

export default {
  getUsers,
  getUserDetails
};
