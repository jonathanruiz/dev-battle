const firstDev = document.getElementById("firstDev");
const secondDev = document.getElementById("secondDev");

// Event Listeners
firstDev.addEventListener("click", () => {
  getUser("firstOutput");
});

secondDev.addEventListener("click", () => {
  getUser("secondOutput");
});

// Get a random number from 1 to 10,000,000
function getRandomID() {
  let number;
  return (number = Math.floor(Math.random() * 10000000) + 1);
}

// Gets the user ID and image
function getUser(outputId) {
  let idNumber = getRandomID();

  fetch(`https://api.github.com/user/${idNumber}?client_id=&client_secret=`)
    .then(res => res.json())
    .then(data => {
      let output = ``;
      output += `
      <img src="${data.avatar_url}">
      <h3>${data.login}</h3>
      `;
      document.getElementById(outputId).innerHTML = output;
    });
}
