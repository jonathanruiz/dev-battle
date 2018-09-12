const firstDev = document.getElementById("firstDev");
const secondDev = document.getElementById("secondDev");
const battleBtn = document.getElementById("battleBtn");
let firstUser = {
  login: "",
  repos: ""
};

let secondUser = {
  login: "",
  repos: ""
};
const api = "https://api.github.com/user";

// Event Listeners
firstDev.addEventListener("click", () => {
  getUser("firstOutput", firstUser);
});

secondDev.addEventListener("click", () => {
  getUser("secondOutput", secondUser);
});

battleBtn.addEventListener("click", () => {
  battle();
});

// Get a random number from 1 to 10,000,000
function getRandomID() {
  let number;
  return (number = Math.floor(Math.random() * 10000000) + 1);
}

// Gets the user ID and image
function getUser(outputId, user) {
  let idNumber = getRandomID();

  // Use this in the commandline to see how many requests I have left over.
  // curl - H "Authorization: token <YOUR-TOKEN-HERE>" - X GET https://api.github.com/rate_limit

  fetch(`${api}/${idNumber}`)
    .then(res => {
      // Check if the app got the "OK"
      if (res.status !== 200) {
        throw new Error("There was an error");
      } else {
        return res.json();
      }
    })
    .catch(err => console.log(err))
    .then(data => {
      let output = ``;

      // Insert data into objects
      user.login = data.login;
      user.repos = data.public_repos;
      console.log(user);

      // Display the output of the user
      output += `
      <img src="${data.avatar_url}">
      <h3>${data.login}</h3>
      `;
      document.getElementById(outputId).innerHTML = output;
    });
}

function battle() {
  if (firstUser.repos > secondUser.repos) {
    console.log(`${firstUser.login} won!`);
  } else if (firstUser.repos < secondUser.repos) {
    console.log(`${secondUser} won!`);
  } else if (firstUser.repos == secondUser.repos) {
    console.log(`It was a tie!`);
  } else {
  }
}
