export const getToken = () => {
  return localStorage.getItem('token');
};

export const setLocalStorage = ({ key, value }) => {
  localStorage.setItem(key, value);
};
