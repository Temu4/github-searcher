const createCardContent = (user) => {
  const content = `<img src="${user.avatar_url}"> <h1>${user.login}</h1><a href="${user.html_url}"></a><p>${user.public_repos}</p>`;
  return content;
};
export default createCardContent;
