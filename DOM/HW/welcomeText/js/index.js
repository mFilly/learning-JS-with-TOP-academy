const getUserName = () => {
  const name = document.querySelector('#user-name')
  return console.log(name.value);
};

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getUserName());
});