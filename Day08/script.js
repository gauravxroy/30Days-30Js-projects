const API_URL = "https://api.quotable.io/random?maxLength=100";
const quotes = document.querySelector("#quote");
const author = document.querySelector("#author");
const nxtBtn = document.querySelector(".nextBtn");
async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quotes.innerText = data.content;
    author.innerText = data.author;
  } catch (err) {
    console.log(err);
  }
}

getQuote(API_URL);

nxtBtn.addEventListener("click", function () {
  getQuote(API_URL);
});

// fetch(API_URL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     quotes.innerText = data.content;
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
