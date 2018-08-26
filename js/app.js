const user1 = document.getElementById("user1");

user1.addEventListener("click", getUser);

function getRandomID() {
  let number;
  return (number = Math.floor(Math.random() * 10000000) + 1);
}

function getUser() {
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
      document.getElementById("output").innerHTML = output;
    });
}
