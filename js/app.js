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

  // Use this in the commandline to see how many requests I have left over.
  // curl - H "Authorization: token 7c5cc90e9e7eb48e6b486b7276fb8d5b37a1b553" - X GET https://api.github.com/rate_limit

  fetch(`https://api.github.com/user/${idNumber}`, {
    headers: {
      Authorization: "token 7c5cc90e9e7eb48e6b486b7276fb8d5b37a1b553" // This is for the OAuth token
    }
  })
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
      output += `
      <img src="${data.avatar_url}">
      <h3>${data.login}</h3>
      `;
      document.getElementById(outputId).innerHTML = output;
    });
}
