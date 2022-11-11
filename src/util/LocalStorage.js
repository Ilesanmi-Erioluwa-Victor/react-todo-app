const getLocalKey = (key) => {
  if (key) {
    const data = localStorage.getItem(key);
    return data;
  }
};

const saveToLocalStorage = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

export { getLocalKey, saveToLocalStorage };
