const addToLocalStorage = (value) => {
  localStorage.setItem("breaking-time", JSON.stringify(value));
};
const getStoredItem = () => {
  let breakingTime;

  const storedItem = localStorage.getItem("breaking-time");
  if (storedItem) {
    breakingTime = JSON.parse(storedItem);
  } else {
    breakingTime = 0;
  }
  return breakingTime;
};

export { addToLocalStorage, getStoredItem };
