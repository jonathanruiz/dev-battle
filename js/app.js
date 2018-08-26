const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");

// Event Listeners
user1.addEventListener("click", () => {
  getUser("output1");
});

user2.addEventListener("click", () => {
  getUser("output2");
});

// Get a random number from 1 to 10,000,000
function getRandomID() {
  let number;
  return (number = Math.floor(Math.random() * 10000000) + 1);
}

// Gets the user ID and image
function getUser(outputId) {
  let idNumber = getRandomID();

  fetch(
    `https://api.github.com/user/${idNumber}?client_id=0f13fc1d496482a413e3&client_secret=17e21574dcae631ce56d13c7b81bcd88848285c0`
  )
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
